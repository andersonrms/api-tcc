import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Costumer from '../models/Costumer';
import Product from '../models/Product';

const models = [User, Costumer, Product];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
