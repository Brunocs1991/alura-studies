import React, {useState} from 'react';
import Formulario from "../componentes/Formulario";
import Lista from "../componentes/Lista";
import style from "./App.module.scss";
import Cronometro from "../componentes/Cronometro";
import {ITarefa} from "../types/tarefa";

const App = () => {
   const [tarefas, setTarefas] = useState<ITarefa[]>([]  )
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
