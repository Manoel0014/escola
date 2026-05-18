/*
  Warnings:

  - You are about to drop the `EnderecoFornecedor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Fornecedor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TelefoneFornecedor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clientes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EnderecoFornecedor" DROP CONSTRAINT "EnderecoFornecedor_fornecedorId_fkey";

-- DropForeignKey
ALTER TABLE "TelefoneFornecedor" DROP CONSTRAINT "TelefoneFornecedor_fornecedorId_fkey";

-- DropTable
DROP TABLE "EnderecoFornecedor";

-- DropTable
DROP TABLE "Fornecedor";

-- DropTable
DROP TABLE "TelefoneFornecedor";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "clientes";

-- CreateTable
CREATE TABLE "Professor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" SERIAL NOT NULL,
    "nomeTurma" TEXT NOT NULL,
    "professorId" INTEGER NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AlunoTurma" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoTurma_AB_unique" ON "_AlunoTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoTurma_B_index" ON "_AlunoTurma"("B");

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlunoTurma" ADD CONSTRAINT "_AlunoTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "Aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlunoTurma" ADD CONSTRAINT "_AlunoTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;
