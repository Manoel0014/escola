import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma';

export const login = async (email: string, password: string) => {

// 1 . Procurar o usuário pelo e-mail
const user = await prisma.user.findUnique({ where: { email } });   
if (!user) throw new Error('Usuário não encontrado'); // e-mail não cadastrado

// 2 . Comparar a senha
const isPasswordValid = await bcrypt.compare(password, user.password);
if (!isPasswordValid) throw new Error('Senha incorreta'); // Senha errada

// 3 . Gerar o token
const token = jwt.sign(
   {id: user.id, email: user.email},
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
);

const { password: _, ...userWithoutPassword } = user; // Retirar a senha do objeto de usuário
return { user: userWithoutPassword, token }; // Retornar o usuário sem a senha e o token
}
