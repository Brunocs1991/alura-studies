import React from 'react';
import './styles.scss'
import Item from "./Item";
import {ITarefa} from "../../types/tarefa";


const Lista = ({tarefas}: {tarefas: ITarefa[]}) => {

  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) =>
         <Item key={item.id} {...item}/>
        )}
      </ul>
    </aside>
  )
}
export default Lista;
