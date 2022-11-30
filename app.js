import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import { resolve } from 'path';
import homeRoutes from './src/routes/homeRouter';
import userRoutes from './src/routes/userRouter';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/user', userRoutes);
  }
}

export default new App().app; // exporting only express
