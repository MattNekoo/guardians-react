import ListarJogosEdit from './ListarJogosEdit';
import CadastrarJogo from "./CadastrarJogo";
import EditarJogo from "./EditarJogo";
import { useFetch } from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';

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
    <div className="cadastro">
      <div className="BarraCadastro">
        <Button
          onClick={editar}
          color="primary"
          size="small"
          variant="outlined"
          sx={{ marginLeft: '40px', marginTop: '10px' }} >
          Editar
        </Button>
        <Button
          onClick={cadastrar}
          size="small"
          variant="outlined"
          sx={{ marginLeft: '5px', marginTop: '10px' }} >
          Cadastrar
        </Button>
      </div>

      {stage === 'editar' && <CadastrarJogo />}
      {stage === 'cadastrar' && <EditarJogo game={games} />}
      <br></br>
      <hr></hr>
      <Typography gutterBottom color='#7B68EE' variant="h4" component="div">Editar ou Deletar lista abaixo</Typography>
      {/* <h3>{games.game}</h3> */}
      {data && data.map((g) => (
        <ListarJogosEdit key={g.id}
          game={g.game}
          developer={g.developer}
          publisher={g.publisher}
          year={g.year}
          dsc={g.dsc}
          gen={g.gen}
          handleRemove={handleRemove}
          id={g.id}
        />
      ))}
    </div>
  )
}

export default Cadastro