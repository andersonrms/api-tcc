import { Router } from 'express';
import loginRouter from '../controllers/LoginController';

const router = new Router();

router.post('/', loginRouter.create);

export default router;
