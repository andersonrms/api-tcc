import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { resolve } from 'path';
import homeRoutes from './src/routes/homeRouter';
import userRoutes from './src/routes/userRouter';
import loginRoutes from './src/routes/loginRouter';
import costumeRoutes from './src/routes/costumerRoutes';
import productRoutes from './src/routes/productRouter';
import photoRoutes from './src/routes/photoRoutes';
import orderRoutes from './src/routes/orderRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }));
    this.app.use(cookieParser());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads'))); // use to open photo on browser
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/user', userRoutes);
    this.app.use('/login', loginRoutes);
    this.app.use('/costumer', costumeRoutes);
    this.app.use('/product', productRoutes);
    this.app.use('/photo', photoRoutes);
    this.app.use('/service-order', orderRoutes);
  }
}

export default new App().app; // exporting only express
