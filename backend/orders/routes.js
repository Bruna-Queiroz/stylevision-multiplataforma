// backend/orders/routes.js
const express = require('express');
const router = express.Router();
const verificarToken = require('../auth/middleware');

// Lista simulada de pedidos
const pedidos = [];

// Criar novo pedido (rota protegida)
router.post('/', verificarToken, (req, res) => {
  const { produto, valor, observacao } = req.body;
  const novoPedido = {
    id: pedidos.length + 1,
    clienteId: req.user.id,
    produto,
    valor,
    observacao,
    status: 'em análise'
  };
  pedidos.push(novoPedido);
  res.status(201).json({ msg: 'Pedido criado com sucesso.', pedido: novoPedido });
});

// Listar pedidos do usuário (rota protegida)
router.get('/', verificarToken, (req, res) => {
  const userOrders = pedidos.filter(p => p.clienteId === req.user.id);
  res.json(userOrders);
});

// Atualizar status do pedido
router.put('/:id', verificarToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const pedido = pedidos.find(p => p.id == id);
  if (!pedido) return res.status(404).json({ msg: 'Pedido não encontrado.' });
  pedido.status = status;
  res.json({ msg: 'Status do pedido atualizado.', pedido });
});

module.exports = router;
