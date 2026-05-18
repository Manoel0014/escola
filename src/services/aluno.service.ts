import prisma from '../config/prisma';

export const createAluno = (nome: string, sobrenome: string) =>
  prisma.aluno.create({ data: { nome, sobrenome } });

export const getAllAlunos = () =>
  prisma.aluno.findMany({ include: { turmas: true } });

export const getAlunoById = (id: number) =>
  prisma.aluno.findUnique({ where: { id }, include: { turmas: true } });

export const updateAluno = (id: number, data: { nome?: string; sobrenome?: string }) =>
  prisma.aluno.update({ where: { id }, data });

export const deleteAluno = (id: number) =>
  prisma.aluno.delete({ where: { id } });