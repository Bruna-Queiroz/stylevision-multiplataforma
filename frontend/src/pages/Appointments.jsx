import React, { useState, useEffect } from 'react';

function Appointments() {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

  const token = localStorage.getItem('token');

  const criarAgendamento = async () => {
    const res = await fetch('http://localhost:5000/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ data, horario, observacoes })
    });
    const result = await res.json();
    alert(result.msg);
    carregarAgendamentos();
  };

  const carregarAgendamentos = async () => {
    const res = await fetch('http://localhost:5000/api/appointments', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const lista = await res.json();
    setAgendamentos(lista);
  };

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  return (
    <div>
      <h2>Agendamentos</h2>
      <input type="date" value={data} onChange={e => setData(e.target.value)} />
      <input type="time" value={horario} onChange={e => setHorario(e.target.value)} />
      <input type="text" placeholder="Observações" value={observacoes} onChange={e => setObservacoes(e.target.value)} />
      <button onClick={criarAgendamento}>Agendar</button>

      <ul>
        {agendamentos.map(ag => (
          <li key={ag.id}>{ag.data} às {ag.horario} - {ag.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;