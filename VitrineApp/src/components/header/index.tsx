import React from "react";

const Header = ({ onShowLogin, onShowRegister }) => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <img src="/images/logo.png" alt="Logo Vitrine" className="w-32 cursor-pointer" />
      <div className="flex gap-4">
        <button
          className="bg-red-600 px-4 py-2 rounded-md text-white hover:bg-red-700 transition"
          onClick={onShowRegister}
        >
          Cadastre-se Grátis
        </button>
        <button
          className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700 transition"
          onClick={onShowLogin}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
