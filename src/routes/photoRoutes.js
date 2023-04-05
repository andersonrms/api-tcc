import { Router } from 'express';
import multer from 'multer';

import photoController from '../controllers/PhotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig); // middleware

const router = new Router();

router.post('/', upload.single('file'), photoController.index);

export default router;
