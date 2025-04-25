import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });
    const data = await res.json();
    alert(data.msg);
    if (res.status === 201) navigate('/');
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
}

export default RegisterPage;