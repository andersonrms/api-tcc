import Costumer from '../models/Costumer';

class CostumersController {
  async create(req, res) {
    try {
      const newCostumer = await Costumer.create(req.body);
      return res.status(200).json(newCostumer);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async list(req, res) {
    try {
      const costumer = await Costumer.findAll();
      return res.status(200).json(costumer);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const costumer = await Costumer.findByPk(req.params.id);
      return res.status(200).json(costumer);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });
      const costumer = await Costumer.findByPk(id);

      if (!costumer) return res.status(400).json({ errors: ['costumers does not exists'] });
      const costumerUpdated = await costumer.update(req.body);

      return res.status(200).json(costumerUpdated);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });
      const costumer = await Costumer.findByPk(id);

      if (!costumer) return res.status(400).json({ errors: ['costumers does not exists'] });
      await costumer.destroy();

      return res.status(200).json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new CostumersController();
