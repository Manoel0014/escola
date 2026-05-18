import { Request, Response } from 'express';
import * as service from '../services/aluno.service';

export const create = async (req: Request, res: Response) => {
  const { nome, sobrenome } = req.body;
  const aluno = await service.createAluno(nome, sobrenome);
  res.status(201).json(aluno);
};

export const getAll = async (_req: Request, res: Response) => {
  res.json(await service.getAllAlunos());
};

export const getById = async (req: Request, res: Response) => {
  const item = await service.getAlunoById(Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Não encontrado' });
  res.json(item);
};

export const update = async (req: Request, res: Response) => {
  const updated = await service.updateAluno(Number(req.params.id), req.body);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  await service.deleteAluno(Number(req.params.id));
  res.status(204).send();
};