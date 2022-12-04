import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({ errors: ['missing email or password'] });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ errors: ['user does not exists'] });
    }

    if (!(await user.checkUserPassword(password))) {
      return res.status(401).json({ errors: ['invalid credentials'] });
    }

    const { id } = user;
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );

    const options = {
      domain: '.localhost',
      path: '/',
      expires: new Date(Date.now() + 900000),
      secure: true,
    };

    res.cookie('jwt', token, options);

    return res.json({ token });
  }
}

export default new TokenController();
