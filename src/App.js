import './App.css';
import Header from "./Components/Header/Header";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import SecondBlock from "./Components/SecondBlock/SecondBlock";
import ThirdBlock from "./Components/ThirdBlock/ThirdBlock";
import Animation from "./Components/Animation/Animation";
import GptModal from "./Components/GptModal/GptModal";
import React, {useState} from "react";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <Animation />
      <GptModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </div>
  );
}

export default App;


