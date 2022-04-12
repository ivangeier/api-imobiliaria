import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/auth';
import cors from 'cors';

const auth = authMiddleware();
const app = express();

app.use(bodyParser.json());
app.use(auth.initialize());

app.use(
  cors({
    origin: '*',
  })
);

export default app;
