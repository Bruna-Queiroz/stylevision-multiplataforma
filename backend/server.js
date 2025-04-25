// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar rotas
app.use('/api/auth', require('./auth/routes'));
app.use('/api/users', require('./users/routes'));
app.use('/api/appointments', require('./appointments/routes'));
app.use('/api/orders', require('./orders/routes'));
app.use('/api/notifications', require('./notifications/routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));