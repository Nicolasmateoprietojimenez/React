
// El ciclo de vida de un componente en React se refiere a las fases que atraviesa un componente desde su creación hasta su destrucción. Cada componente en React pasa por una serie de etapas o fases durante su existencia, durante las cuales se ejecutan ciertos métodos que te permiten controlar y gestionar su comportamiento.

import React, { Component } from 'react';

class EjemploCiclo extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor ejecutado');
    this.state = { contador: 0 };
  }

  componentDidMount() {
    console.log('componentDidMount ejecutado');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate ejecutado');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount ejecutado');
  }

  aumentarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    console.log('render ejecutado');
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.aumentarContador}>Aumentar contador</button>
      </div>
    );
  }
}

export default EjemploCiclo;
