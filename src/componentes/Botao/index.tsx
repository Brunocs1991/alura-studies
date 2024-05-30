import React from "react";
import style from './Botao.module.scss'

interface BotaoProps {
  texto: string;
}

const Botao = ({texto}: BotaoProps) => {

  return (
    <button className={style.botao}>
      {texto}
    </button>
  )
}

export default Botao
