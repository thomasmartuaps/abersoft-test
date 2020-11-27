import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPass, checkPass } from '../helpers/bcrypt';
import { createToken } from '../helpers/jwt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const router = Router();

interface Data {
  email: string;
  pass: string;
}

type errorResponse = {
  status: number;
  errorCode: string;
  meta: any;
  message: string;
};

router.post('/register', async (req, res) => {
  const { body }: { body: Data } = req;
  const hashed: string = hashPass(body.pass)
  const result = await prisma.user.create({
    data: {
      email: body.email,
      pass: hashed,
    }
  })
    .then((res) => {
      return {
        status: 200,
        email: res.email,
        token: createToken({ id: res.id, email: res.email }),
        message: 'Register successful'
      }
    })
    .catch((e) => {
    if (e.code === 'P2002') {
      const errorMsg = {
        status: 400,
        errorCode: e.code,
        meta: e.meta,
        message: `${e.meta.target} already exists!`
      }
      return errorMsg
    } else {
      const errorMsg = {
        status: 500,
        errorCode: e.code,
        meta: e.meta,
        message: 'Unhandled error.'
      }
      return errorMsg
    }
  })

  res.status(result.status).json(result)
});
router.post('/login', async (req, res) => {
  const { body }: { body: Data } = req;
  const result = await prisma.user.findUnique({
    where: {
      email: body.email,
    }
  }).then((res) => {
    if (res !== null) {
      const checkPassword = checkPass(body.pass, res.pass)
      if (checkPassword) {
        return {
          status: 200,
          message: 'Login successful!',
          email: res.email,
          token: createToken({ id: res.id, email: res.email })
        }
      } else {
        return {
          status: 404,
          message: 'Wrong email/password!'
        }
      }
    } else {

      return {
        status: 404,
        message: 'Wrong email/password!'
      }
    }
  })
    .catch((e) => {
      return {
        status: 500,
        message: "Unhandled error.",
        e
      }
    })
  if (result !== null && result !== undefined) {
    res.status(result.status).json(result)
  } else {
    res.status(404).json({
      message: 'Wrong email/password!'
    })
  }
});

export default router;