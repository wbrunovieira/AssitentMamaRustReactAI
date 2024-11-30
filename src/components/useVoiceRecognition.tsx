import { useEffect, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionStatic;
    webkitSpeechRecognition: SpeechRecognitionStatic;
  }
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [commandRecognized, setCommandRecognized] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition API não está disponível no navegador.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "pt-BR";

    recognition.onstart = () => {
      console.log("Reconhecimento de voz iniciado.");
      setIsListening(true);
      setIsError(false);
    };

    recognition.onend = () => {
      console.log("Reconhecimento de voz finalizado.");
      setIsListening(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Erro no reconhecimento de voz:", event.error);
      if (event.error === "no-speech") {
        console.log("Nenhuma fala detectada.");
        setIsListening(false);
        setIsError(true);

        setTimeout(() => {
          if (!isError) recognition.start();
        }, 2000);
      } else if (event.error === "aborted") {
        console.log("Reconhecimento de voz abortado.");
        setIsListening(false);
      }
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript =
        event.results[event.resultIndex][0].transcript.toLowerCase();
      console.log("Reconhecimento: ", transcript);

      if (transcript.includes("oi márcia")) {
        setCommandRecognized(true);
        console.log("Comando reconhecido: Oi Marcia");
      }
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [isError]);

  return { isListening, commandRecognized };
};

export default useVoiceRecognition;
