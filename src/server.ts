import express from 'express';
import professorRoutes from './routes/professor.routes';
import alunoRoutes from './routes/aluno.routes';
import turmaRoutes from './routes/turma.routes';

const app = express();

app.use(express.json()); // 👈 ESSA LINHA É OBRIGATÓRIA E DEVE VIR PRIMEIRO

app.use('/professores', professorRoutes);
app.use('/alunos', alunoRoutes);
app.use('/turmas', turmaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));