import React from 'react';
import Formulario from "../componentes/Formulario";
import Lista from "../componentes/Lista";
import style from "./App.module.scss";
import Cronometro from "../componentes/Cronometro";

const App = () => {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
