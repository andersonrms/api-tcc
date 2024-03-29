import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.create);
router.get('/', userController.list);
router.get('/:id', userController.show);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', userController.delete);

export default router;
