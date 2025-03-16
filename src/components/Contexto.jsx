'use client';
import ContextProvider from '@/data/contexts/ContadorContext';
import '../app/globals.css';
import React, { useContext } from 'react';
import Link from 'next/link';

const Contexto = () => {
  const { numero, increment, decrement } = useContext(ContextProvider);

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <span className='text-8xl font-black'>{numero}</span>
      <div className='flex gap-[15px]'>
        <button
          onClick={increment}
          className='botao'>
          +1
        </button>
        <button
          onClick={decrement}
          className='botao'>
          -1
        </button>
      </div>
      <Link href={'/'}>Inicial</Link>
    </div>
  );
};

export default Contexto;
