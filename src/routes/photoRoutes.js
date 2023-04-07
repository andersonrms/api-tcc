import { Router } from 'express';

import photoController from '../controllers/PhotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photoController.create);
router.delete('/:id', loginRequired, photoController.delete);

export default router;
