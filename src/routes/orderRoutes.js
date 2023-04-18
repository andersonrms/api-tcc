import { Router } from 'express';
import orderController from '../controllers/OrderController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, orderController.create);
router.get('/', loginRequired, orderController.list);
router.get('/:id', loginRequired, orderController.show);
router.put('/:id', loginRequired, orderController.update);
router.delete('/:id', loginRequired, orderController.delete);

export default router;
