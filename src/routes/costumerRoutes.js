import { Router } from 'express';
import costumerController from '../controllers/CostumerController';

const router = new Router();

router.post('/', costumerController.create);
router.get('/', costumerController.list);
router.get('/:id', costumerController.show);
router.put('/:id', costumerController.update);
router.delete('/:id', costumerController.delete);

export default router;
