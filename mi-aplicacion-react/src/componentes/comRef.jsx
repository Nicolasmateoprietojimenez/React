import React, { useRef } from 'react';
// Current es el equivalente a this para objetos(elemento del dom)

const MiComponente = () => {
  // Creamos una referencia utilizando el hook useRef
  const miElementoRef = useRef(null);

  // Función para manipular el elemento del DOM
  const manipularElemento = () => {
    // Accedemos al elemento del DOM utilizando la propiedad current de la referencia
    miElementoRef.current.style.color = 'red';
    miElementoRef.current.innerText = '¡Elemento modificado!';
  };

  return (
    <div>
      {/* Elemento del DOM al que queremos hacer referencia */}
      <div ref={miElementoRef}>Este es un elemento que podemos manipular</div>

      {/* Botón que llama a la función para manipular el elemento */}
      <button onClick={manipularElemento}>Manipular Elemento</button>
    </div>
  );
};

export default MiComponente;
