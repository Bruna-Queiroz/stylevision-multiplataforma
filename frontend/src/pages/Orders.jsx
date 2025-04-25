import React, { useState, useEffect } from 'react';

function Orders() {
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [observacao, setObservacao] = useState('');
  const [pedidos, setPedidos] = useState([]);

  const token = localStorage.getItem('token');

  const criarPedido = async () => {
    const res = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ produto, valor, observacao })
    });
    const result = await res.json();
    alert(result.msg);
    carregarPedidos();
  };

  const carregarPedidos = async () => {
    const res = await fetch('http://localhost:5000/api/orders', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const lista = await res.json();
    setPedidos(lista);
  };

  useEffect(() => {
    carregarPedidos();
  }, []);

  return (
    <div>
      <h2>Pedidos</h2>
      <input type="text" placeholder="Produto" value={produto} onChange={e => setProduto(e.target.value)} />
      <input type="number" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} />
      <input type="text" placeholder="Observação" value={observacao} onChange={e => setObservacao(e.target.value)} />
      <button onClick={criarPedido}>Enviar Pedido</button>

      <ul>
        {pedidos.map(p => (
          <li key={p.id}>{p.produto} - R${p.valor} - {p.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;