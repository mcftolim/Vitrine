import React, { useState } from 'react';
import './Register.styles.css';

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    birthdate: '',
    email: '',
    telefone: '',
    password: '',
    type: '',
  });
  const [error, setError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/cadastro-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        window.location.href = `/bem-vindo?nome=${encodeURIComponent(formData.username)}`;
      }
    } catch (err) {
      setError('Erro ao realizar cadastro');
    }
  };

  return (
    <div className="container-modal-login2">
      <div className="register" id="register">
        <img
          src="/images/assets/logos/logo-preta.png"
          alt="Logo"
          className="logo-register"
        />
        <form className="uk-form-stacked" onSubmit={handleSubmit}>
          <h1 className="cadastro-title">Cadastro</h1>
          <span className="close-register" onClick={onClose}>x</span>

          <div className="type">
            <label>
              <input
                type="radio"
                name="type"
                value="user"
                onChange={handleChange}
              />
              <p>Usuário</p>
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="model"
                onChange={handleChange}
              />
              <p>Streamer</p>
            </label>
          </div>

          <div className="infos">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Nome de usuário"
              value={formData.username}
              onChange={handleChange}
            />
            
            <input
              id="date"
              type="text"
              name="birthdate"
              placeholder="Data de Nascimento"
              value={formData.birthdate}
              onChange={handleChange}
             /*  maxLength="10" */
            />

            <input
              id="email-2"
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="telefone"
              placeholder="(99) 99999-9999"
              value={formData.telefone}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {error && <span className="error-message">{error}</span>}

          <label className="terms">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <p className="txt-terms">
              Li e aceito os <a href="#" onClick={(e) => e.preventDefault()}>termos de uso</a>
            </p>
          </label>

          <button 
            id="submit" 
            type="submit"
            disabled={!termsAccepted}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;