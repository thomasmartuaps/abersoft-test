import bcrypt from 'bcryptjs';

export function hashPass(pass: string) {
  return bcrypt.hashSync(pass, 10)
};

export function checkPass(pass: string, hash: string) {
  return bcrypt.compareSync(pass, hash)
};