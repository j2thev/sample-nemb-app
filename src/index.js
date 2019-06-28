import 'dotenv/config';
import express from 'express';

import routes from './routes';
import { connectDb } from './models';

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
routes(app);

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
  });
});
