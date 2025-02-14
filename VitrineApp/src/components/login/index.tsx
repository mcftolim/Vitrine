import React, { useState } from 'react';
import './Login.styles.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.redirect;
      } else {
        setError(data.message || 'Erro ao fazer login');
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor');
    }
  };

  return (
    <div className="container-modal-login">
      <div className="login" id="modal-login">
        <span className="close" onClick={onClose}>x</span>
        <img
          src="/images/assets/logos/logo-preta.png"
          alt="Logo vitrine."
          className="logo logo-modal-login"
        />
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="input-login">
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <span className="error-message">{error}</span>}
          <button type="submit" className="b-login">ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 