import React from "react";

const Header = ({ onShowLogin, onShowRegister }) => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <div className="flex items-center gap-4">
        <img src="/assets/logoPreta.svg" alt="Logo Vitrine" className="w-32 h-32 object-contain cursor-pointer" />
      </div>
      <div className="flex gap-4">
        <button
          className="bg-red-600 px-6 py-3 rounded-md text-white text-lg hover:bg-red-700 transition"
          onClick={onShowRegister}
        >
          Cadastre-se Grátis
        </button>
        <button
          className="bg-green-600 px-6 py-3 rounded-md text-white text-lg hover:bg-green-700 transition"
          onClick={onShowLogin}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
