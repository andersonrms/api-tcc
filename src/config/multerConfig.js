import multer from 'multer';
import { extname, resolve } from 'path';

const numberRandom = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads')); // __dirname === current folder
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${numberRandom()}${extname(file.originalname)}`);
    },
  }),
};
