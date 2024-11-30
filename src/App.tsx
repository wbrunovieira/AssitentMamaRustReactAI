import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <main className="bg-background text-primaryText min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-highlight">Bem-vinda, Rose!</h1>

        <div className="mt-8 space-y-6 w-full max-w-md">
          <button
            onClick={() => {}}
            className="bg-buttonAction text-white px-8 py-4 rounded-lg w-full text-xl font-semibold hover:bg-buttonPrimary transition-all"
          >
            Ver Vídeos
          </button>
          <button
            onClick={() => {}}
            className="bg-buttonAction text-white px-8 py-4 rounded-lg w-full text-xl font-semibold hover:bg-buttonPrimary transition-all"
          >
            Ver Fotos
          </button>
          <button
            onClick={() => {}}
            className="bg-buttonAction text-white px-8 py-4 rounded-lg w-full text-xl font-semibold hover:bg-buttonPrimary transition-all"
          >
            Ouvir Música
          </button>
          <button
            onClick={() => {}}
            className="bg-buttonAction text-white px-8 py-4 rounded-lg w-full text-xl font-semibold hover:bg-buttonPrimary transition-all"
          >
            Ver Mensagens
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
