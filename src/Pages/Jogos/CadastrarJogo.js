import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react'
import { useFetch } from "../../hooks/useFetch"

const CadastrarJogo = () => {

  const url = "http://localhost:8000/games"
  const { httpPost } = useFetch();

  const [game, setGame] = useState("");
  const [dev, setDev] = useState("");
  const [year, setYear] = useState("");
  const [dsc, setDsc] = useState("");
  const [pub, setPub] = useState("");
  const [gen, setGen] = useState("");

  const options = [
    { label: '7ª Gen', id: 7 },
    { label: '8ª Gen', id: 8 },
    { label: '9ª Gen', id: 9 },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const games = {
      game: game,
      developer: dev,
      year: year,
      dsc_jogo: dsc,
      publisher: pub,
      gen: gen,
    };

    // const addedGames = await res.json()
    // setGames((prevGames) => [...prevGames, addedGames]);
    console.log(games);
    httpPost(games, url);
    setGame("");
    setDev("");
    setYear("");
    setDsc("");
    setPub("");
    setGen("");
  }


  return (
    <div className='Form'>
      <Typography variant="h2">Cadastrar Jogo no BD</Typography>
      <div>
        <form onSubmit={handleSubmit}>
          <Typography>Nome do Jogo:</Typography>
          <TextField fullWidth type="text" inputProps={{ style: { backgroundColor:'#3e4444' } }} name="nomejogo" required value={game} onChange={(e) => setGame(e.target.value)} id="outlined-basic" variant="outlined" />
          <Typography>Developer:</Typography>
          <TextField fullWidth type="text" inputProps={{ style: { backgroundColor:'#3e4444' } }} name="developer" required value={dev} onChange={(e) => setDev(e.target.value)} id="outlined-basic" variant="outlined" />
          <Typography>Publicadora:</Typography>
          <TextField fullWidth type="text" inputProps={{ style: { backgroundColor:'#3e4444' } }} name="publicadora" required value={pub} onChange={(e) => setPub(e.target.value)} id="outlined-basic" variant="outlined" />
          <Typography>Data de Lançamento:</Typography>
          <TextField fullWidth type="number" inputProps={{ style: { backgroundColor:'#3e4444' } }} name="dt_lancamento" required value={year} onChange={(e) => setYear(e.target.value)} id="outlined-basic" variant="outlined" />
          <Typography>Geração:
            <Select
              fullWidth
              labelId="gen"
              id="gen"
              value={gen}
              label="Geração"
              onChange={(e) => setGen(e.target.value)}
            >
              <MenuItem value={7}>7ª Gen</MenuItem>
              <MenuItem value={8}>8ª Gen</MenuItem>
              <MenuItem value={9}>9ª Gen</MenuItem>
            </Select>
          </Typography>
          <Button type="submit" value="enviar" color="primary" size="small" variant="outlined" sx={{ marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }}>Enviar</Button>
          <Button type="clear" value="limpar" color="primary" size="small" variant="outlined" sx={{ marginLeft: '5px', marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }} >Limpar</Button>
        </form>
      </div>
    </div>
  )
}

export default CadastrarJogo