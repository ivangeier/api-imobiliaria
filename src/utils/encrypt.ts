import bcrypt from 'bcrypt';

const saltRounds = 10;

export const encrypt = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
};

export const decrypt = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
