import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';

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
    return {
      error: 'Unhandled Error',
      detail: e.response.data
    }
  })

  if(!result.error) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result)
  }
});
router.post('/login', );

export default router;