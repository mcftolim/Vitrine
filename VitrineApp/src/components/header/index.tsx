import React from 'react';
import './Header.styles.css';

const Header = ({ onShowLogin, onShowRegister }) => {
  return (
    <header>
      <img
        src="/assets/logoPreta.svg"
        alt="Logo vitrine."
        id="hamburguer"
      />
      <section className="button-home">
        <button 
          className="custom-button cadastro"
          onClick={onShowRegister}
        >
          Cadastre-se Grátis
        </button>
        <button
          id="login"
          className="custom-button"
          onClick={onShowLogin}
        >
          Login
        </button>
      </section>
    </header>
  );
};

export default Header; 