# 📌 RESTful API Node.js Template

Este projeto é um template para a criação de uma API RESTful utilizando Node.js, Express e TypeScript. Ele já vem configurado com autenticação JWT, Bcrypt para criptografia de senhas, Mongoose para integração com MongoDB e uma estrutura modular para facilitar a escalabilidade.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript no servidor
- **Express** - Framework minimalista para APIs
- **TypeScript** - Superset do JavaScript para melhor tipagem e organização
- **Mongoose** - ODM para modelagem de dados no MongoDB
- **JWT (jsonwebtoken)** - Autenticação baseada em tokens
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Nodemon** - Reinicialização automática do servidor em desenvolvimento
- **Bcrypt** - Criptografia segura de senhas

## 📦 Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/julio-bandeira/RESTful_API_Node_Template.git
   ```

2. **Acesse o diretório do projeto:**
   ```sh
   cd RESTful_API_Node_Template
   ```

3. **Instale as dependências:**
   ```sh
   npm install
   ```

4. **Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente:**
   ```sh
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/meubanco
   ```

## ▶️ Como Rodar o Projeto

Para iniciar o servidor em modo de desenvolvimento com hot reload:
```sh
npm run dev
```

Para rodar o servidor em produção:
```sh
npm start
```

## 📌 Estrutura do Projeto
```
📂 src
 ├── 📂 controllers    # Controladores das rotas
 ├── 📂 models         # Modelos do banco de dados (Mongoose)
 ├── 📂 routes         # Definição das rotas
 ├── 📂 services       # Controle e modularização de pacotes npm (Mongoose, Jsonwebtoken e Bcrypt) 
 ├── server.ts        # Ponto de entrada da aplicação
```

## 🔑 Autenticação com JWT
O projeto já conta com autenticação via **JSON Web Token (JWT)**. Para acessar rotas protegidas, envie o token no cabeçalho da requisição:

```http
Authorization: Bearer <seu_token>
```

## 🔐 Segurança com Bcrypt
O projeto utiliza **Bcrypt** para criptografar senhas antes de armazená-las no banco de dados, garantindo maior segurança para os usuários. Ao criar um novo usuário, a senha é armazenada de forma segura utilizando hashing e salting.

## 📬 Rotas Principais

| Método | Rota             | Descrição                         |
|--------|------------------|-----------------------------------|
| POST   | /login           | Autenticação de usuário           |
| POST   | /accountRegister | Cadastro de novo usuário          |

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para usar e modificar! 🎉

---

Feito com 💙 por [Julio Bandeira](https://github.com/julio-bandeira).

