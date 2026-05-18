import { Router } from 'express';
import * as ctrl from '../controllers/aluno.controller';
import { validate } from '../middlewares/validate.middlewares';
import { authMiddleware } from '../middlewares/auth.middleware';
import { createAlunoSchema, updateAlunoSchema } from '../schemas/aluno.schema';

const router = Router();

router.post('/', authMiddleware, validate(createAlunoSchema), ctrl.create);
router.get('/', authMiddleware, ctrl.getAll);
router.get('/:id', authMiddleware, ctrl.getById);
router.put('/:id', authMiddleware, validate(updateAlunoSchema), ctrl.update);
router.delete('/:id', authMiddleware, ctrl.remove);

export default router;