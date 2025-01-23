import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header.jsx";
import {useTelegram} from "./hooks/useTelegram.js";
import Button from "./components/Button/Button.jsx";

function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, []);

  return (
    <div className="App">
      <Header/>
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
