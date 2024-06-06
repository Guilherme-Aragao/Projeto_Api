# API de Gerenciamento de Carros

Esta é uma API REST para gerenciar uma lista de carros, permitindo operações de criação, leitura, atualização e exclusão (CRUD) em um banco de dados SQLite. Esta API foi desenvolvida como parte do curso de Engenharia de Software na UniEVANGÉLICA.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- SQLite

## Estrutura do Projeto

```plaintext
api_project/
│
├── controllers/
│   └── carController.js
├── models/
│   └── Car.js
├── routes/
│   └── carRoutes.js
└── index.js

Instalação
Clone o repositório:
git clone https://github.com/seu-usuario/api_project.git
cd api_project

Instale as dependências:
npm install express body-parser sqlite3 sequelize

Execute o servidor:
node index.js

# Endpoints
Recuperar a lista de carros
URL: /api/cars
Método: GET
Descrição: Recupera a lista de todos os carros.
Exemplo de Requisição: curl -X GET http://localhost:3000/api/cars

# Criar um novo carro
URL: /api/cars
Método: POST
Descrição: Cria um novo carro.
Exemplo de Requisição: curl -X POST http://localhost:3000/api/cars -H "Content-Type: application/json" -d '{"name": "Fiat", "model": "Uno"}'

# Recuperar informações de um carro específico por ID
URL: /api/cars/{car_id}
Método: GET
Descrição: Recupera informações de um carro específico por ID.
Exemplo de Requisição: curl -X GET http://localhost:3000/api/cars/1

# Atualizar informações de um carro específico por ID
URL: /api/cars/{car_id}
Método: PUT
Descrição: Atualiza informações de um carro específico por ID.
Exemplo de Requisição: curl -X PUT http://localhost:3000/api/cars/1 -H "Content-Type: application/json" -d '{"name": "Fiat", "model": "Uno 2022"}'

# Excluir um carro específico por ID
URL: /api/cars/{car_id}
Método: DELETE
Descrição: Exclui um carro específico por ID.
Exemplo de Requisição: curl -X DELETE http://localhost:3000/api/cars/1
