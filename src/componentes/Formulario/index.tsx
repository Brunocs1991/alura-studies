import React, {useState} from 'react';
import Botao from "../Botao";
import style from './Formulario.module.scss'
import {ITarefa} from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid';


const Formulario = ({setTarefas}: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) => {

  const [formData, setFormData] = useState({
    tarefa: '',
    tempo: '00:00:00'
  });

  const adicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setTarefas(tarefasAntigas => [
      ...tarefasAntigas,
      {
        ...formData,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ]);
    setFormData({tarefa: '', tempo: '00:00:00'});
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          placeholder="O que você quer estudar"
          required
          value={formData.tarefa}
          onChange={(e) => setFormData((formData) => ({
            ...formData,
            tarefa: e.target.value
          }))} //setFormData({...formData, tarefa: e.target.value)}
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
          value={formData.tempo}
          onChange={(e) => setFormData((formData) => ({
            ...formData,
            tempo: e.target.value
          }))} //setFormData({...formData, tempo:(e.target.value)}
        />
      </div>
      <Botao texto="Adicionar" type="submit"/>
    </form>
  )
}

export default Formulario;
