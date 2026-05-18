import { Router } from 'express';
import * as ctrl from '../controllers/professor.controller';
import { validate } from '../middlewares/validate.middlewares';
import { authMiddleware } from '../middlewares/auth.middleware';
import { createProfessorSchema, updateProfessorSchema, loginSchema } from '../schemas/professor.schema';

const router = Router();

router.post('/', validate(createProfessorSchema), ctrl.create);
router.post('/login', validate(loginSchema), ctrl.login);
router.get('/', authMiddleware, ctrl.getAll);
router.get('/:id', authMiddleware, ctrl.getById);
router.put('/:id', authMiddleware, validate(updateProfessorSchema), ctrl.update);
router.delete('/:id', authMiddleware, ctrl.remove);

export default router;