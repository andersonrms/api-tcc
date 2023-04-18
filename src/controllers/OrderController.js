import Order from '../models/Order';

class OrderController {
  async create(req, res) {
    try {
      const newOrder = await Order.create(req.body);
      return res.status(200).json(newOrder);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async list(req, res) {
    try {
      const orders = await Order.findAll({
        order: [['id', 'DESC']],
      });

      return res.status(200).json(orders);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) return res.status(400).json({ errors: ['order does not exists'] });

      return res.status(200).json(order);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });

      const order = await Order.findByPk(id);
      if (!order) return res.status(400).json({ errors: ['order does not exists'] });

      const orderUpdated = await order.update(req.body);
      return res.status(200).json(orderUpdated);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });

      const order = await Order.findByPk(id);
      if (!order) return res.status(400).json({ errors: ['order does not exists'] });

      await order.destroy();
      return res.status(200).json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new OrderController();
