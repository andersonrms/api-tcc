import Sequelize, { Model } from 'sequelize';

export default class Costumer extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'name is empty or less than 3',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'email already exists',
        },
        validate: {
          isEmail: {
            args: [3, 255],
            msg: 'invalid email',
          },
        },
      },
      cnpj: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        unique: {
          msg: 'cnpj already exists',
        },
        validate: {
          len: {
            args: [11, 14],
            msg: 'invalid cpf or cnpj',
          },
        },
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'addres is empty or less than 3',
          },
        },
      },
      phone: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 255],
            msg: 'phone is empty or less than 8',
          },
        },
      },
    }, {
      sequelize,
    });
  }
}
