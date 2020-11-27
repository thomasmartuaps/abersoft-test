import jwt from 'jsonwebtoken';

interface Payload {
  id: number;
  email: string;
};

export function createToken(payload: Payload) {
  const secret = process.env.SECRET as string;
  return jwt.sign(payload, secret)
}