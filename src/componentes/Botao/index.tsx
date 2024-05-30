import React from "react";
import style from './Botao.module.scss'

interface BotaoProps {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined
}

const Botao = ({texto, type = "button"}: BotaoProps) => {

  return (
    <button className={style.botao} type={type}>
      {texto}
    </button>
  )
}

export default Botao
