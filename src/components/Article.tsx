// CÓDIGO DE EXEMPLO DE ARTIGO - DEVE SER INCLUIDO NO Article.tsx

import React, { useState, useEffect } from 'react';
import { Counter } from '../components/Counter';

// Usado como exemplo de funcionamento do Article Schema
const CronixArticleSchema: React.FC = () => {

  // Gerar a estrutura de schema
  return (
    <div>
      <h2>International Website</h2>
      <p>
        Website construído no modelo Next.js 11 com React componentes
      </p>
      <p>Ilumine a estrela Flask</p>
      <Counter />
      
      {/* TODO: implementar */}
    </div>
  );
};

// Exportação do componente