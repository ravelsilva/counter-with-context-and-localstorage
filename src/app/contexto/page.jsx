'use client';

import Contexto from '@/components/Contexto';
import { ContadorContext } from '@/data/contexts/ContadorContext';

export default function Context() {
  return (
    <div>
      <ContadorContext>
        <Contexto />
      </ContadorContext>
      
    </div>
  );
}
