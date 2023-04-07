import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('file'); // middleware

class PhotoController {
  create(req, res) {
    return upload(req, res, async (error) => {
      if (error) return res.status(400).json({ erros: [error.code] });

      const { originalname, filename } = req.file;
      // const user_id = req.userId;
      const { user_id } = req.body;
      const newPhoto = await Photo.create({ originalname, filename, user_id });

      return res.json(newPhoto);
    });
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['missing id'] });

      const photo = await Photo.findByPk(id);
      if (!photo) return res.status(400).json({ errors: ['user does not exists'] });

      await photo.destroy();
      return res.status(200).json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new PhotoController();
