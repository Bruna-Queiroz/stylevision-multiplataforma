import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Bem-vindo ao Painel</h2>
      <nav>
        <ul>
          <li><Link to="/appointments">Agendamentos</Link></li>
          <li><Link to="/orders">Pedidos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;