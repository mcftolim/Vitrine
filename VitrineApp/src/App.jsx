import Footer from "./components/footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Conteúdo da página aqui */}</div>
      <Footer />
    </div>
  );
}
