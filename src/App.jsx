import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header.jsx";
import {useTelegram} from "./hooks/useTelegram.js";
import {Route, Routes} from "react-router-dom";
import Form from "./components/Form/Form.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";


function App() {
  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
