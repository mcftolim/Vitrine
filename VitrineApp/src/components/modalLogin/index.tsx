import React from "react";

const ModalLogin = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-white">
          <button className="absolute top-4 right-4 text-white" onClick={onClose}>X</button>
          <h2 className="text-2xl mb-4">Login</h2>
          <input type="text" placeholder="E-mail" className="w-full p-2 mb-3 rounded-md bg-gray-700" />
          <input type="password" placeholder="Senha" className="w-full p-2 mb-3 rounded-md bg-gray-700" />
          <button className="bg-blue-600 w-full p-2 rounded-md hover:bg-blue-700 transition">Entrar</button>
        </div>
      </div>
    );
  };
  
  export default ModalLogin;
  