import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      admin: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
    return this;
  }
}
