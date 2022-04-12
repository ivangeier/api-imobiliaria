import 'dotenv/config';

export default {
  jwtSecret: process.env.AUTH_SECRET,
  jwtSession: {session: false},
};
