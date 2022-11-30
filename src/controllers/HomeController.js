import User from '../models/User';

class HomeController {
  async index(req, res) {
    const newUser = await User.create({
      name: 'Ester Hellen Ramos',
      email: 'esterhellen@gmail.com',
      admin: 0,
      password_hash: '',
    });
    res.status(200).json(newUser);
  }
}

export default new HomeController();
