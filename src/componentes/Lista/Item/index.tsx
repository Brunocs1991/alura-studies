import React from "react";


interface ItemProps {

  tarefa: string;
  tempo: string;

}

const Item = ({tarefa, tempo}: ItemProps) => {
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
