import prisma from '../config/prisma';

export const createTurma = (nomeTurma: string, professorId: number) =>
  prisma.turma.create({
    data: { nomeTurma, professorId },
    include: { professor: { select: { id: true, nome: true } } },
  });

export const getAllTurmas = () =>
  prisma.turma.findMany({
    include: {
      professor: { select: { id: true, nome: true } },
      alunos: true,
    },
  });

export const getTurmaById = (id: number) =>
  prisma.turma.findUnique({
    where: { id },
    include: { professor: { select: { id: true, nome: true } }, alunos: true },
  });

export const updateTurma = (id: number, data: { nomeTurma?: string; professorId?: number }) =>
  prisma.turma.update({ where: { id }, data });

export const deleteTurma = (id: number) =>
  prisma.turma.delete({ where: { id } });

export const addAlunoNaTurma = async (turmaId: number, alunoId: number) => {
  // Verifica se turma e aluno existem antes de conectar
  const turma = await prisma.turma.findUnique({ where: { id: turmaId } });
  const aluno = await prisma.aluno.findUnique({ where: { id: alunoId } });

  if (!turma) throw new Error(`Turma com id ${turmaId} não encontrada`);
  if (!aluno) throw new Error(`Aluno com id ${alunoId} não encontrado`);

  return prisma.turma.update({
    where: { id: turmaId },
    data: {
      alunos: {
        connect: { id: alunoId },
      },
    },
    include: { alunos: true },
  });
};

export const removeAlunoNaTurma = async (turmaId: number, alunoId: number) => {
  return prisma.turma.update({
    where: { id: turmaId },
    data: {
      alunos: {
        disconnect: { id: alunoId },
      },
    },
  });
};