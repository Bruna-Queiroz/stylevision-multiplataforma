# Style Vision Óptica - Sistema Multiplataforma

Sistema de gerenciamento de consultas e pedidos para atendimento domiciliar da ótica Style Vision. O projeto é uma aplicação multiplataforma com frontend responsivo e backend em microserviços.

## 🔧 Tecnologias Utilizadas
- **Frontend**: React.js, React Router DOM
- **Backend**: Node.js, Express
- **Segurança**: Autenticação JWT
- **Banco de Dados**: Simulado em memória (pode ser integrado ao MongoDB)

## 📁 Estrutura do Projeto
```
stylevision-multiplataforma/
├── backend/
│   ├── auth/             # Serviço de autenticação
│   ├── users/            # Serviço de usuários
│   ├── appointments/     # Serviço de agendamentos
│   ├── orders/           # Serviço de pedidos
│   ├── notifications/    # Serviço de notificações
│   └── server.js         # Servidor principal
├── frontend/
│   └── src/pages/        # Telas de login, cadastro, painel, etc.
└── README.md
```

## ▶️ Como Executar o Projeto

### 1. Backend
```bash
cd backend
npm install
node server.js
```
Servidor rodará em `http://localhost:5000`

### 2. Frontend
```bash
cd frontend
npm install
npm start
```
Frontend rodará em `http://localhost:3000`

## 🔐 Autenticação
Utilize o token JWT fornecido após o login para acessar rotas protegidas. O token é armazenado localmente pelo frontend e enviado no cabeçalho `Authorization`.

## ✅ Funcionalidades Implementadas
- Cadastro e login de usuários
- Agendamento de consultas
- Envio e consulta de pedidos
- Listagem e atualização de status
- Simulação de notificações por tipo (e-mail ou SMS)

## 📷 Apresentação à Comunidade
Apresentação realizada via Google Meet com prints anexados no documento de apresentação. Público-alvo: comunidade local, clientes da ótica e representantes.

## 👨‍🏫 Colaborador Adicionado
O professor `profmiqueias` foi adicionado como colaborador no repositório GitHub conforme solicitado.

---

Desenvolvido como parte da disciplina de Projeto Aplicado de Multiplataforma Etapa 2.
