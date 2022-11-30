import User from '../models/User';

class HomeController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.status(200).json(newUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async list(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });
      const user = await User.findByPk(id);

      if (!user) return res.status(400).json({ errors: ['user does not exists'] });
      const userUpdated = await user.update(req.body);

      return res.status(200).json(userUpdated);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });
      const user = await User.findByPk(id);

      if (!user) return res.status(400).json({ errors: ['user does not exists'] });
      await user.destroy();

      return res.status(200).json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new HomeController();
