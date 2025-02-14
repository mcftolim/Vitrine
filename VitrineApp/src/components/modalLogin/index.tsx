import React from "react";

const ModalLogin = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ease-in-out">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white relative">
        <button className="absolute top-4 right-4 text-white text-xl" onClick={onClose}>✕</button>
        <div className="flex flex-col items-center">
          <img src="/images/logo.png" alt="Logo Vitrine" className="w-16 mb-4" />
          <h2 className="text-2xl font-semibold">Login</h2>
        </div>
        <input type="text" placeholder="E-mail" className="w-full p-3 mt-4 rounded-md bg-gray-800 focus:outline-none" />
        <input type="password" placeholder="Senha" className="w-full p-3 mt-3 rounded-md bg-gray-800 focus:outline-none" />
        <div className="text-sm text-gray-400 mt-2">Esqueci minha senha</div>
        <div className="flex items-center mt-3">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm">Manter-me conectado</label>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 w-full p-3 mt-4 rounded-md transition duration-200">ENTRAR</button>
      </div>
    </div>
  );
};

export default ModalLogin;
