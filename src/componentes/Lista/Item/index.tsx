import React from "react";
import {ITarefa} from "../../../types/tarefa";


const Item = ({tarefa, tempo, selecionado, completado, id}: ITarefa) => {
  return (
    <li className="item">
      <h3>
        {tarefa}
      </h3>
      <span>{tempo}</span>
    </li>
  )
}
export default Item;
