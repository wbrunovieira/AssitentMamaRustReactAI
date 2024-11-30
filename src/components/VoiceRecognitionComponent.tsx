import useVoiceRecognition from "./useVoiceRecognition";

const VoiceRecognitionComponent = () => {
  const { isListening, commandRecognized } = useVoiceRecognition();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <div>
        {isListening ? (
          <p className="text-lg text-blue-500">Estou ouvindo...</p>
        ) : (
          <p className="text-lg text-gray-500">estou aqui</p>
        )}
      </div>

      {commandRecognized && (
        <p className="text-xl text-green-500">
          Comando reconhecido: "Oi Márcia"
        </p>
      )}
    </div>
  );
};

export default VoiceRecognitionComponent;
