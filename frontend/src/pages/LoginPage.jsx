import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } else {
      alert(data.msg);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;