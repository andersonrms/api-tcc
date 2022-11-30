import User from '../models/User';

class HomeController {
  async create(req, res) {
    const {
      name, email, password, admin,
    } = req.body;
    try {
      const newUser = await User.create({
        name, email, password, admin,
      });
      res.status(200).json(newUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new HomeController();
