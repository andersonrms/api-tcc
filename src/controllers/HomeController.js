// import Aluno from '../models/Aluno';

class HomeController {
  index(req, res) {
    res.status(200).json({
      tudoCert: 'true',
    });
  }
}

export default new HomeController();
