import {createContext, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import ProductStore from "./store/productStore.js";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Context = createContext({});

createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    product: new ProductStore()
  }}>
    <StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StrictMode>
  </Context.Provider>
)
