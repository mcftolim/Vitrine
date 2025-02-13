import { useState } from "react";


import Home from "./components/home";
import ModalLogin from "./components/modalLogin";
import ModalRegister from "./components/modalRegister";

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
