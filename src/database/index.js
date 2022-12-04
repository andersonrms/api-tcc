import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Costumer from '../models/Costumer';

const models = [User, Costumer];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
