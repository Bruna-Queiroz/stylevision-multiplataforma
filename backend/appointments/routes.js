// backend/appointments/routes.js
const express = require('express');
const router = express.Router();
const verificarToken = require('../auth/middleware');

// Lista simulada de agendamentos
const agendamentos = [];

// Criar novo agendamento (rota protegida)
router.post('/', verificarToken, (req, res) => {
  const { data, horario, observacoes } = req.body;
  const novoAgendamento = {
    id: agendamentos.length + 1,
    clienteId: req.user.id,
    data,
    horario,
    observacoes,
    status: 'pendente'
  };
  agendamentos.push(novoAgendamento);
  res.status(201).json({ msg: 'Consulta agendada com sucesso.', agendamento: novoAgendamento });
});

// Listar agendamentos do usuário (rota protegida)
router.get('/', verificarToken, (req, res) => {
  const userAppointments = agendamentos.filter(a => a.clienteId === req.user.id);
  res.json(userAppointments);
});

// Atualizar status do agendamento (ex: concluído/cancelado)
router.put('/:id', verificarToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const agendamento = agendamentos.find(a => a.id == id);
  if (!agendamento) return res.status(404).json({ msg: 'Agendamento não encontrado.' });
  agendamento.status = status;
  res.json({ msg: 'Status atualizado com sucesso.', agendamento });
});

module.exports = router;
