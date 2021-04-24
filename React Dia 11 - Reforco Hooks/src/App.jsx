import {createContext, useState} from 'react'
import './App.css';
import Componente1 from './components/Componente1';

const umValor = 5;
const outroValor = 10;
const terceiroValor = 20;
export const NomeDoContexto = createContext();

function App() {
  const [nome, setNome] = useState(umValor)


  return (
      <NomeDoContexto.Provider value={{nome: nome, setNome: setNome}}>
        <p>Componente inicial = {nome}</p>
        <Componente1 umValor={umValor}/>
      </NomeDoContexto.Provider>
    );
}

export default App;
