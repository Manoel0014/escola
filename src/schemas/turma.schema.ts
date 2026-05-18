import { z } from 'zod';

export const createTurmaSchema = z.object({
  nomeTurma: z.string().min(2, 'Nome da turma muito curto'),
  professorId: z.number().int().positive(),
});

export const updateTurmaSchema = z.object({
  nomeTurma: z.string().min(2).optional(),
  professorId: z.number().int().positive().optional(),
});