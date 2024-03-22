import React, { useState } from 'react';
// Los hooks en React son funciones especiales que te permiten usar el estado y otras características de React en componentes funcionales en lugar de tener que usar clases. En este caso usar la propiedad State con una funcion flecha

const EjemploEstado = () => {
  // Declaración del estado con useState
  const [contador, setContador] = useState(0);

  // Función de flecha para aumentar el contador
  const aumentarContador = () => {
    setContador(contador + 1); // Actualiza el estado incrementando el contador en 1
  };

  // Renderización del componente
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={aumentarContador}>Aumentar contador</button>
    </div>
  );
};

export default EjemploEstado;
