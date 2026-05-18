import { Router } from 'express';
import * as ctrl from '../controllers/turma.controller';
import { validate } from '../middlewares/validate.middlewares';
import { authMiddleware } from '../middlewares/auth.middleware';
import { createTurmaSchema, updateTurmaSchema } from '../schemas/turma.schema';

const router = Router();

router.post('/', authMiddleware, validate(createTurmaSchema), ctrl.create);
router.get('/', authMiddleware, ctrl.getAll);
router.get('/:id', authMiddleware, ctrl.getById);
router.put('/:id', authMiddleware, validate(updateTurmaSchema), ctrl.update);
router.delete('/:id', authMiddleware, ctrl.remove);
router.post('/:turmaId/aluno/:alunoId', authMiddleware, ctrl.addAluno);
router.delete('/:turmaId/aluno/:alunoId', authMiddleware, ctrl.removeAluno);

export default router;