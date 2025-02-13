import React from "react";

const ModalRegister = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ease-in-out">
      <div className="bg-red-700 p-6 rounded-lg shadow-lg w-96 text-white relative">
        <button className="absolute top-4 right-4 text-white text-xl" onClick={onClose}>✕</button>
        <div className="flex flex-col items-center">
          <img src="/assets/logoPreta.svg" alt="Logo Vitrine" className="w-16 mb-4" />
          <h2 className="text-2xl font-semibold">Cadastro</h2>
        </div>
        <div className="flex justify-center gap-4 my-3">
          <label className="flex items-center gap-1">
            <input type="radio" name="userType" className="accent-white" /> Usuário
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="userType" className="accent-white" /> Streamer
          </label>
        </div>
        <input type="text" placeholder="Nome de usuário" className="w-full p-3 mt-2 rounded-md bg-gray-800 focus:outline-none" />
        <input type="date" placeholder="dd/mm/aaaa" className="w-full p-3 mt-2 rounded-md bg-gray-800 focus:outline-none" />
        <input type="email" placeholder="E-mail" className="w-full p-3 mt-2 rounded-md bg-gray-800 focus:outline-none" />
        <input type="text" placeholder="(99) 99999-9999" className="w-full p-3 mt-2 rounded-md bg-gray-800 focus:outline-none" />
        <div className="relative">
          <input type="password" placeholder="Senha" className="w-full p-3 mt-2 rounded-md bg-gray-800 focus:outline-none pr-10" />
          <span className="absolute right-3 top-4 cursor-pointer">👁️</span>
        </div>
        <div className="flex items-center mt-3">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm">Li e aceito os <span className="text-blue-400 cursor-pointer">termos de uso</span></label>
        </div>
        <button className="bg-white text-red-700 font-semibold w-full p-3 mt-4 rounded-md transition duration-200">REGISTRAR</button>
        <button className="text-white w-full p-3 mt-2">Fechar</button>
      </div>
    </div>
  );
};

export default ModalRegister;