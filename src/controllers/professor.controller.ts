import { Request, Response } from 'express';
import * as service from '../services/professor.service';

export const create = async (req: Request, res: Response) => {
  try {
    const { nome, email, password } = req.body;
    const professor = await service.createProfessor(nome, email, password);
    res.status(201).json(professor);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await service.loginProfessor(email, password);
    res.json(result);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

export const getAll = async (_req: Request, res: Response) => {
  const list = await service.getAllProfessores();
  res.json(list);
};

export const getById = async (req: Request, res: Response) => {
  const item = await service.getProfessorById(Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Não encontrado' });
  res.json(item);
};

export const update = async (req: Request, res: Response) => {
  try {
    const updated = await service.updateProfessor(Number(req.params.id), req.body);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  await service.deleteProfessor(Number(req.params.id));
  res.status(204).send();
};