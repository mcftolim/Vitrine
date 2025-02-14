import { useState } from "react";
import Home from "./components/home";
import ModalLogin from "./components/modalLogin";
import ModalRegister from "./components/modalRegister";
import "./App.css";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="app-container">
      <Home 
        onShowLogin={() => setIsLoginOpen(true)}
        onShowRegister={() => setIsRegisterOpen(true)}
      />
      <ModalLogin isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ModalRegister isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
} 