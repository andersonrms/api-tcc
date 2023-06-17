import Sequelize, { Model } from 'sequelize';

export default class Order extends Model {
  static init(sequelize) {
    super.init({
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isNumeric: {
            msg: 'amount does not a number',
          },
          notEmpty: {
            msg: 'amount is empty',
          },
        },
      },
      total_value: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'total value does not a price',
          },
          notEmpty: {
            msg: 'total value is empty',
          },
        },
      },
      status: {
        type: Sequelize.ENUM(['pending', 'production', 'done']),
        defaultValue: 'peding',
        validate: {
          isIn: {
            args: [['pending', 'production', 'done']],
            msg: 'status must be pending, production or done',
          },
        },
      },
      payment_form: {
        type: Sequelize.ENUM(['credit', 'currency', 'installment']),
        defaultValue: '',
        validate: {
          isIn: {
            args: [['credit', 'currency', 'installment']],
            msg: 'payment form must be credit, currency or installment',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'orders',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Product, { foreignKey: 'product_id' });
    this.belongsTo(models.Costumer, { foreignKey: 'costumer_id' });
  }
}
