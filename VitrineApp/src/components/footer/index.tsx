import React from 'react';
import './Footer.styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Parceiros</h3>
          <ul>
            <li>Estúdio</li>
            <li>Torne-se Streamer</li>
            <li>Agência & Assessoria</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Streamers</h3>
          <ul>
            <li>Perguntas Frequentes</li>
            <li>Como Funciona</li>
            <li>Termos de Uso</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Informações</h3>
          <ul>
            <li>Política de Privacidade</li>
            <li>Política de Uso</li>
            <li>DMCA</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Fale conosco</h3>
          <ul>
            <li>Suporte</li>
            <li>Denúncias</li>
            <li>Reclamações</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>O Vitrine Chat é um site para maiores de 18 anos. Tenha segurança e comodidade oferecidas pelo Vitrine Chat.</p>
        <p>© 2024 Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer; 