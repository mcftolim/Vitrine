import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 text-center mt-6">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
      <div>
        <h3 className="text-lg font-bold">Parceiros</h3>
        <ul className="mt-2 space-y-1">
          <li>Estúdio</li>
          <li>Top Streamers</li>
          <li>Agências & Assessoria</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">Streamers</h3>
        <ul className="mt-2 space-y-1">
          <li>Como Funciona</li>
          <li>Termos de Uso</li>
          <li>Perguntas Frequentes</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">Informações Legais</h3>
        <ul className="mt-2 space-y-1">
          <li>Política de Uso</li>
          <li>Política de Privacidade</li>
          <li>DMCA</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">Ajuda</h3>
        <ul className="mt-2 space-y-1">
          <li>Fale Conosco</li>
          <li>Suporte</li>
          <li>Denúncias</li>
        </ul>
      </div>
    </div>
    <div className="mt-6 text-gray-400 text-xs border-t border-gray-700 pt-4">
      <p>O Vitrine Chat é um site para maiores de 18 anos.</p>
      <p>Tenha segurança e comodidade oferecidas pelo Vitrine Chat.</p>
      <p>© 2024 Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;