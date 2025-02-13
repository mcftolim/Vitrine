import React from "react";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Coluna 1 - Parceiros */}
            <div>
              <h3 className="text-lg font-bold">Parceiros</h3>
              <ul className="mt-2 space-y-1">
                <li>Estúdio</li>
                <li>Top Streamers</li>
                <li>Agências & Assessoria</li>
              </ul>
            </div>
  
            {/* Coluna 2 - Streamers */}
            <div>
              <h3 className="text-lg font-bold">Streamers</h3>
              <ul className="mt-2 space-y-1">
                <li>Perguntas Frequentes</li>
                <li>Como Funciona</li>
                <li>Termos de Uso</li>
              </ul>
            </div>
  
            {/* Coluna 3 - Informações */}
            <div>
              <h3 className="text-lg font-bold">Informações</h3>
              <ul className="mt-2 space-y-1">
                <li>Política de Privacidade</li>
                <li>Política de Uso</li>
                <li>DMCA</li>
              </ul>
            </div>
  
            {/* Coluna 4 - Contato */}
            <div>
              <h3 className="text-lg font-bold">Fale Conosco</h3>
              <ul className="mt-2 space-y-1">
                <li>Suporte</li>
                <li>Denúncias</li>
                <li>Reclamações</li>
              </ul>
            </div>
          </div>
  
          {/* Texto final do Footer */}
          <div className="mt-6 border-t border-gray-700 pt-4">
            <p className="text-gray-400">O Vitrine Chat é um site para maiores de 18 anos.</p>
            <p className="text-gray-400">Tenha segurança e comodidade oferecidas pelo Vitrine Chat.</p>
            <p className="text-gray-400">
              Desenvolvido por{" "}
              <a href="https://mxcybertec.com.br/" className="text-blue-400 hover:underline">
                Cybertec
              </a>
            </p>
            <p className="text-gray-400">© 2024 Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  