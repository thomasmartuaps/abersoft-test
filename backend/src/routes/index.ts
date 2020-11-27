import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const router = Router();

interface Data {
  email: string;
  pass: string;
}

router.post('/register', async (req, res) => {
  const { body }: { body: Data } = req;
  const result = await prisma.user.create({
    data: {
      email: body.email,
      pass: body.pass,
    }
  }).catch((e) => {
    type errorResponse = {
      errorCode: string;
      meta: any;
    }
    const errorMsg: errorResponse = {
      errorCode: e.code,
      meta: e.meta
    }
    return errorMsg
  })

  if(!result.errorCode) {
    res.status(200).json(result);
  } else if(result.errorCode === 'P2002') {
    res.status(400).json({
      message: `${result.meta.target[0]} already exists!`
    })
  } else {
    res.status(500).json({
      message: 'Uncaught error.'
    })
  }
});
router.post('/login', );

export default router;