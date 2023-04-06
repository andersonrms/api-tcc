import multer from 'multer';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('file'); // middleware

class PhotoController {
  async index(req, res) {
    return upload(req, res, (error) => {
      if (error) return res.status(400).json({ erros: [error.code] });

      return res.json(req.file);
    });
  }
}

export default new PhotoController();
