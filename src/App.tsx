import { FaPlay, FaImage, FaMusic, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <main className="bg-lightGray text-darkText min-h-screen flex flex-col items-center justify-center p-12">
      <div className="text-center space-y-12">
        <h1 className="text-6xl font-bold text-highlight">Bem-vinda, Rose!</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
          <button
            onClick={() => {}}
            className="bg-buttonAction text-white px-12 py-8 rounded-lg w-full text-4xl font-extrabold hover:bg-buttonPrimary hover:text-white hover:scale-110 transform transition-transform duration-300 transition-colors focus:ring-4 focus:ring-buttonPrimary"
          >
            <FaPlay size={50} />
            <span className="ml-6">Assistir Vídeos</span>
          </button>

          <button
            onClick={() => {}}
            className="bg-buttonAction text-white px-12 py-8 rounded-lg w-full text-4xl font-extrabold hover:bg-buttonPrimary hover:text-white hover:scale-110 transform transition-transform duration-300 transition-colors focus:ring-4 focus:ring-buttonPrimary"
          >
            <FaImage size={50} />
            <span className="ml-6">Ver Fotos</span>
          </button>

          <button
            onClick={() => {}}
            className="bg-buttonAction text-white px-12 py-8 rounded-lg w-full text-4xl font-extrabold hover:bg-buttonPrimary hover:text-white hover:scale-110 transform transition-transform duration-300 transition-colors focus:ring-4 focus:ring-buttonPrimary"
          >
            <FaMusic size={50} />
            <span className="ml-6">Ouvir Música</span>
          </button>

          <button
            onClick={() => {}}
            className="bg-buttonAction text-white px-12 py-8 rounded-lg w-full text-4xl font-extrabold hover:bg-buttonPrimary hover:text-white hover:scale-110 transform transition-transform duration-300 transition-colors focus:ring-4 focus:ring-buttonPrimary"
          >
            <FaEnvelope size={50} />
            <span className="ml-6">Ver Mensagens</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
