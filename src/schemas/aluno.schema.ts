import { z } from 'zod';

export const createAlunoSchema = z.object({
  nome: z.string().min(2, 'Nome muito curto'),
  sobrenome: z.string().min(2, 'Sobrenome muito curto'),
});

export const updateAlunoSchema = z.object({
  nome: z.string().min(2).optional(),
  sobrenome: z.string().min(2).optional(),
});