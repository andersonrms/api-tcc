class HomeController {
  async index(req, res) {
    res.json(req.file);
  }
}

export default new HomeController();
