import { Request, Response } from 'express';
import * as service from '../services/turma.service';

export const create = async (req: Request, res: Response) => {
  const { nomeTurma, professorId } = req.body;
  const turma = await service.createTurma(nomeTurma, professorId);
  res.status(201).json(turma);
};

export const getAll = async (_req: Request, res: Response) => {
  res.json(await service.getAllTurmas());
};

export const getById = async (req: Request, res: Response) => {
  const item = await service.getTurmaById(Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Não encontrado' });
  res.json(item);
};

export const update = async (req: Request, res: Response) => {
  const updated = await service.updateTurma(Number(req.params.id), req.body);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  await service.deleteTurma(Number(req.params.id));
  res.status(204).send();
};
export const addAluno = async (req: Request, res: Response) => {
  try {
    const turmaId = parseInt(req.params.turmaId);
    const alunoId = parseInt(req.params.alunoId);

    if (isNaN(turmaId) || isNaN(alunoId)) {
      return res.status(400).json({ error: 'IDs inválidos' });
    }

    const turma = await service.addAlunoNaTurma(turmaId, alunoId);
    res.json(turma);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const removeAluno = async (req: Request, res: Response) => {
  try {
    const turmaId = parseInt(req.params.turmaId);
    const alunoId = parseInt(req.params.alunoId);

    if (isNaN(turmaId) || isNaN(alunoId)) {
      return res.status(400).json({ error: 'IDs inválidos' });
    }

    await service.removeAlunoNaTurma(turmaId, alunoId);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};