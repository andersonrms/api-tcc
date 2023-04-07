import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Costumer from '../models/Costumer';
import Product from '../models/Product';
import Photo from '../models/Photo';

const models = [User, Costumer, Product, Photo];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
