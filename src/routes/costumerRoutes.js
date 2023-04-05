import { Router } from 'express';
import CostumerController from '../controllers/CostumerController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, CostumerController.create);
router.get('/', loginRequired, CostumerController.list);
router.get('/:id', loginRequired, CostumerController.show);
router.put('/:id', loginRequired, CostumerController.update);
router.delete('/:id', loginRequired, CostumerController.delete);

export default router;
