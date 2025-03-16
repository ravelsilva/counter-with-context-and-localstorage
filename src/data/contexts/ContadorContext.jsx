'use client';
import { createContext, useEffect, useState } from 'react';

const ContextProvider = createContext({});

export function ContadorContext({ children }) {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    //Sempre que iniciar o projeto ele procura o number salvo no LS
    const storedNumber = localStorage.getItem('counterNumber');
    if (storedNumber) {
      setNumero(parseInt(storedNumber));
    }
  }, []);

  useEffect(() => {
    //Sempre que o número mudar e for diferente de 0 ele adiciona no LS
    if (numero !== 0) {
      localStorage.setItem('counterNumber', numero.toString());
    }
  }, [numero]);

  function increment() {
    setNumero((prev) => prev + 1);
  }
  function decrement() {
    setNumero((prev) => prev - 1);
  }

  return (
    <ContextProvider.Provider
      value={{
        numero,
        increment,
        decrement,
      }}>
      {children}
    </ContextProvider.Provider>
  );
}
export default ContextProvider;
