import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma';

export const createProfessor = async (nome: string, email: string, password: string) => {
  const hash = await bcrypt.hash(password, 10);
  return prisma.professor.create({
    data: { nome, email, password: hash },
    select: { id: true, nome: true, email: true },
  });
};

export const loginProfessor = async (email: string, password: string) => {
  const professor = await prisma.professor.findUnique({ where: { email } });
  if (!professor) throw new Error('Credenciais inválidas');

  const valid = await bcrypt.compare(password, professor.password);
  if (!valid) throw new Error('Credenciais inválidas');

  const token = jwt.sign({ id: professor.id }, process.env.JWT_SECRET as string, {
    expiresIn: '8h',
  });

  return { token, professor: { id: professor.id, nome: professor.nome, email: professor.email } };
};

export const getAllProfessores = () =>
  prisma.professor.findMany({ select: { id: true, nome: true, email: true } });

export const getProfessorById = (id: number) =>
  prisma.professor.findUnique({
    where: { id },
    select: { id: true, nome: true, email: true, turmas: true },
  });

export const updateProfessor = async (id: number, data: { nome?: string; email?: string; password?: string }) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return prisma.professor.update({
    where: { id },
    data,
    select: { id: true, nome: true, email: true },
  });
};
export const deleteProfessor = async (id: number) => {
  // Primeiro deleta as turmas vinculadas ao professor
  await prisma.turma.deleteMany({ where: { professorId: id } });
  // Depois deleta o professor
  return prisma.professor.delete({ where: { id } });
};