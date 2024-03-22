import Referencias from "./componentes/compRefMenu";
import EjemploEstado from "./componentes/compState";
import MiComponente from "./componentes/comRef";
import EjemploCiclo from "./componentes/compCicloVida";
import ComponenteEfecto from "./componentes/CompEffect";
function App() {
  return (
    <div className="App">
      <Referencias></Referencias>
      <EjemploEstado></EjemploEstado>
      <MiComponente></MiComponente>
      <EjemploCiclo></EjemploCiclo>
      <ComponenteEfecto></ComponenteEfecto>
    </div>
  );
}

export default App;
