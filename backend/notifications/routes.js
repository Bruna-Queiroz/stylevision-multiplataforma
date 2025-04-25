// backend/notifications/routes.js
const express = require('express');
const router = express.Router();
const verificarToken = require('../auth/middleware');

// Lista simulada de notificações
const notificacoes = [];

// Criar nova notificação (rota protegida)
router.post('/', verificarToken, (req, res) => {
  const { mensagem, tipo } = req.body;
  const novaNotificacao = {
    id: notificacoes.length + 1,
    usuarioId: req.user.id,
    mensagem,
    tipo, // ex: email, sms
    data: new Date().toISOString()
  };
  notificacoes.push(novaNotificacao);
  res.status(201).json({ msg: 'Notificação enviada com sucesso.', notificacao: novaNotificacao });
});

// Listar notificações do usuário
router.get('/', verificarToken, (req, res) => {
  const minhas = notificacoes.filter(n => n.usuarioId === req.user.id);
  res.json(minhas);
});

module.exports = router;
