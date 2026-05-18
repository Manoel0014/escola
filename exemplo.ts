
interface User  {
    id: number;
    name: String;
    email: String;
    password: String;
    createdAt: Date;
    updatedAt: Date;
}


let nome: string;
let email: string;
let password: string;

const user1: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    createdAt: new Date(),
    updatedAt: new Date(),
};




function createUser(user: User) {

    console.log(user);
    // Lógica para criar um novo usuário
}






