import React, { useState } from 'react';

function ContadorStatus() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>Você clicou {count} vezes </span>
      <button onClick={() => setCount(count + 1)}>
        Adicionar 
      </button>
      <span> </span>
      <button onClick={() => setCount(count - 1)}>
        Remover 
      </button>
      <span> </span>
      <button onClick={() => setCount(count === 0)}>
        Zerar 
      </button>
    </div>
  );
}
export default ContadorStatus;