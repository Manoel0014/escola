
# Instalação do projeto

 1. Clonar o repositório


 git clone (https://github.com/Manoel0014/escola.git)


 2. Entrar na pasta do projeto


 3. Instalar as dependências


npm install


# Configuração do PostgreSQL

## Criar banco de dados

No PostgreSQL, crie um banco chamado:

```sql
CREATE DATABASE escola;
```

---

# Configuração das variáveis de ambiente

Crie um arquivo chamado `.env` na raiz do projeto.

Exemplo:

```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/escola"
PORT=3000
JWT_SECRET=sua_chave_secreta
```

---


---
Comandos do Prisma

Gerar o Prisma Client: npx prisma generate

Criar migration: npx prisma migrate dev --name init

Visualizar banco de dados: npx prisma studio




Executando o projeto

Ambiente de desenvolvimento

npm run dev




Documentação básica dos endpoints

Professores

Criar professor: POST /professores

Listar professores: GET /professores


Buscar professor por ID: GET /professores/:id

Atualizar professor: PUT /professores/:id

Deletar professor: DELETE /professores/:id

Alunos

Criar aluno: POST /alunos

Listar alunos: GET /alunos


Buscar aluno por ID: GET /alunos/:id


Atualizar aluno: PUT /alunos/:id


Deletar aluno: DELETE /alunos/:id

Turmas
Criar turma: POST /turmas


Listar turmas: GET /turmas

Buscar turma por ID: GET /turmas/:id

Atualizar turma:PUT /turmas/:id

Deletar turma: DELETE /turmas/:id


Exemplos de requisição

Criar professor

json
{
  "nome": "Carlos Silva",
  "email": "carlos@email.com",
  "password": "123456"
}


Criar aluno

json
{
  "nome": "João",
  "sobrenome": "Souza"
}


Criar turma

json
{
  "nomeTurma": "Turma A",
  "professorId": 1
}

