// backend/auth/routes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Simulando um banco de dados em memória (substituir por MongoDB depois)
const users = [];

// Registrar novo usuário
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  // Verifica se usuário já existe
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ msg: 'E-mail já cadastrado.' });
  }

  const hashedPassword = await bcrypt.hash(senha, 10);
  const newUser = {
    id: users.length + 1,
    nome,
    email,
    senha: hashedPassword
  };
  users.push(newUser);
  res.status(201).json({ msg: 'Usuário registrado com sucesso.' });
});

// Login do usuário
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ msg: 'Usuário não encontrado.' });

  const isMatch = await bcrypt.compare(senha, user.senha);
  if (!isMatch) return res.status(400).json({ msg: 'Senha incorreta.' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user: { id: user.id, nome: user.nome, email: user.email } });
});

module.exports = router;



