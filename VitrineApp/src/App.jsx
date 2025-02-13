import React, { useState } from "react";
import Home from "./components/Home";
import ModalLogin from "./components/ModalLogin";
import ModalRegister from "./components/ModalRegister";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Home 
        onShowLogin={() => setIsLoginOpen(true)}
        onShowRegister={() => setIsRegisterOpen(true)}
      />
      <ModalLogin isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ModalRegister isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}
