// backend/users/routes.js
const express = require('express');
const router = express.Router();
const verificarToken = require('../auth/middleware');

// Simulação de base de dados (mesmo array de usuários em memória)
const users = [
  // Este será sincronizado com o array de autenticação se integrar MongoDB
];

// Rota protegida - listar perfil do usuário autenticado
router.get('/perfil', verificarToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ msg: 'Usuário não encontrado.' });
  res.json({ id: user.id, nome: user.nome, email: user.email });
});

// Rota protegida - atualizar nome ou e-mail
router.put('/perfil', verificarToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ msg: 'Usuário não encontrado.' });

  const { nome, email } = req.body;
  if (nome) user.nome = nome;
  if (email) user.email = email;
  res.json({ msg: 'Perfil atualizado com sucesso.', user });
});

module.exports = router;
