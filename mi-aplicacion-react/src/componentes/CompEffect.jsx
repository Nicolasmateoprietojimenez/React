import React, { useEffect } from 'react';
// El use effect tambien es un hook
const ComponenteEfecto = () => {
  useEffect(() => {
    console.log('El componente se montó en el DOM');
  }, []); // La lista de dependencias está vacía, lo que significa que el efecto se ejecutará solo una vez, después del montaje del componente

  return (
    <div>
      <p>Contenido del componente</p>
    </div>
  );
};

export default ComponenteEfecto;
