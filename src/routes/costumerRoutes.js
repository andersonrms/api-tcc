import { Router } from 'express';
import costumerController from '../controllers/CostumerController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, costumerController.create);
router.get('/', loginRequired, costumerController.list);
router.get('/:id', loginRequired, costumerController.show);
router.put('/:id', loginRequired, costumerController.update);
router.delete('/:id', loginRequired, costumerController.delete);

export default router;
