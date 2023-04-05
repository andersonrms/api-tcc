import { Router } from 'express';
import ProductController from '../controllers/ProductController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, ProductController.create);
router.get('/', loginRequired, ProductController.list);
router.get('/:id', loginRequired, ProductController.show);
router.put('/:id', loginRequired, ProductController.update);
router.delete('/:id', loginRequired, ProductController.delete);

export default router;
