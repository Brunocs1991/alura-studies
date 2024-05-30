import React from 'react';
import Botao from "../Botao";
import style from './Formulario.module.scss'

const Formulario = () => {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          id="tempo"
          name="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao>Log in</Botao>
    </form>
  )
}

export default Formulario;
