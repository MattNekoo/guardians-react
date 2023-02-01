import ListarJogosEdit from './ListarJogosEdit';
import CadastrarJogo from "./CadastrarJogo";
import EditarJogo from "./EditarJogo";
import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';

import './Cadastro.css';
import ListaGeral from './ListaGeral';

const stages = [
  { id: 0, name: 'cadastrar' },
  { id: 1, name: 'editar' },
]

const Cadastro = ({ handleMessage }) => {

  // const messages = ["Adicionar", "Remover", "Alterar"]
  const url = "http://localhost:8000/games"
  const { data, httpPost, httpDelete } = useFetch(url);

  const [games, setGames] = useState(data);

  const [stage, setStage] = useState(stages[1].name)

  const editar = () => {
    setStage(stages[0].name)
    setGames(data)
  }
  const cadastrar = () => {
    setStage(stages[1].name)
    setGames(data)
  }

  const handleRemove = (id) => {

    httpDelete(id, url)
  }

  return (
    <>
      <>
        <Button
          onClick={editar}
          color="primary"
          size="small"
          variant="outlined"
        >
          Editar
        </Button>
        <Button
          onClick={cadastrar}
          size="small"
          variant="outlined"
        >
          Cadastrar
        </Button>
      </>

      {stage === 'editar' && <CadastrarJogo />}
      {stage === 'cadastrar' && <EditarJogo game={games} />}
      <ListaGeral/>
    </>
  )
}

export default Cadastro