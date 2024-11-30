import "./App.css";
import useVoiceRecognition from "./components/useVoiceRecognition";
import MicrophoneButton from "./components/MicrophoneButton";
import VoiceRecognitionComponent from "./components/VoiceRecognitionComponent";

function App() {
  const { isListening } = useVoiceRecognition();

  const textVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "auto", transition: { duration: 2 } },
  };

  const microphoneVariants = {
    active: {
      scale: 1.1,
      opacity: 1,
      transition: { yoyo: Infinity, duration: 1 },
    },
    inactive: { scale: 1, opacity: 0.5 },
  };

  return (
    <main className="bg-lightGray text-darkText min-h-screen flex flex-col items-center justify-center p-12">
      <div className="text-center space-y-12">
        <h1 className="text-6xl font-bold text-highlight">Bem-vinda, Rose!</h1>

        <MicrophoneButton />
        <VoiceRecognitionComponent />
      </div>
    </main>
  );
}

export default App;
