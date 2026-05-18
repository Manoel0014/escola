
# Instalação do projeto

## 1. Clonar o repositório

```bash
git clone (https://github.com/Manoel0014/escola.git)
```

## 2. Entrar na pasta do projeto

```bash
cd escola
```

## 3. Instalar as dependências

```bash
npm install
```

---

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

# Comandos do Prisma

## Gerar o Prisma Client

```bash
npx prisma generate
```

## Criar migration

```bash
npx prisma migrate dev --name init
```

## Visualizar banco de dados

```bash
npx prisma studio
```

---

# Executando o projeto

## Ambiente de desenvolvimento

```bash
npm run dev
```

## Build do projeto

```bash
npm run build
```

## Executar versão compilada

```bash
npm start
```


# Documentação básica dos endpoints

## Professores

### Criar professor

```http
POST /professores
```

### Listar professores

```http
GET /professores
```

### Buscar professor por ID

```http
GET /professores/:id
```

### Atualizar professor

```http
PUT /professores/:id
```

### Deletar professor

```http
DELETE /professores/:id
```

---

## Alunos

### Criar aluno

```http
POST /alunos
```

### Listar alunos

```http
GET /alunos
```

### Buscar aluno por ID

```http
GET /alunos/:id
```

### Atualizar aluno

```http
PUT /alunos/:id
```

### Deletar aluno

```http
DELETE /alunos/:id
```

---

## Turmas

### Criar turma

```http
POST /turmas
```

### Listar turmas

```http
GET /turmas
```

### Buscar turma por ID

```http
GET /turmas/:id
```

### Atualizar turma

```http
PUT /turmas/:id
```

### Deletar turma

```http
DELETE /turmas/:id
```

---

# Exemplos de requisição

## Criar professor

```json
{
  "nome": "Carlos Silva",
  "email": "carlos@email.com",
  "password": "123456"
}
```

## Criar aluno

```json
{
  "nome": "João",
  "sobrenome": "Souza"
}
```

## Criar turma

```json
{
  "nomeTurma": "Turma A",
  "professorId": 1
}
```

---
