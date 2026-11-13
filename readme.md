# ⚽ Champions League API

API REST para consulta dos clubes da UEFA Champions League, desenvolvida com **Node.js**, **Express** e **TypeScript**.

## 📌 Sobre o projeto

A API disponibiliza a lista dos 36 clubes participantes da fase de liga da Champions League 2026/27, permitindo listar todos os clubes e consultar um clube específico pelo `id`.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 📂 Estrutura do projeto

```
champions-league-api/
├── src/
│   ├── data/
│   │   └── clubs.json
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

> Ajuste a estrutura acima de acordo com as pastas reais do seu projeto.

## ⚙️ Como executar

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

```bash
# clonar o repositório
git clone https://github.com/edusilverfit/champions-league-api.git

# entrar na pasta
cd champions-league-api

# instalar as dependências
npm install
```

### Rodando em desenvolvimento

```bash
npm run dev
```

### Build e execução em produção

```bash
npm run build
npm start
```

O servidor ficará disponível em `http://localhost:3000`.

## 📡 Endpoints

| Método | Rota         | Descrição                    |
| ------ | ------------ | ---------------------------- |
| GET    | `/clubs`     | Lista todos os clubes        |
| GET    | `/clubs/:id` | Retorna um clube pelo `id`   |

### Exemplo de requisição

```http
GET /clubs
```

### Exemplo de resposta

```json
[
  { "id": 1, "name": "Real Madrid" },
  { "id": 2, "name": "Barcelona" },
  { "id": 3, "name": "Manchester City" }
]
```

### Buscando um clube

```http
GET /clubs/2
```

```json
{ "id": 2, "name": "Barcelona" }
```

### Códigos de status

| Código | Significado                  |
| ------ | ---------------------------- |
| 200    | Requisição bem-sucedida      |
| 404    | Clube não encontrado         |

## 🧠 Aprendizados

- Criação de uma API REST com Express e TypeScript
- Organização do código em rotas, controllers e services
- Tipagem de dados com TypeScript
- Versionamento com Git e GitHub

## 🗺️ Próximos passos

- [ ] Adicionar campos como país, estádio e títulos
- [ ] Implementar filtros por país
- [ ] Criar rotas de cadastro, edição e remoção (POST, PUT, DELETE)
- [ ] Integrar com banco de dados PostgreSQL
- [ ] Adicionar testes automatizados

## 👨‍💻 Autor

**Eduardo Akere**

- GitHub: [@edusilverfit](https://github.com/edusilverfit)