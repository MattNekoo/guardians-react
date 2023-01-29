import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const ListarJogos = () => {

    const { id } = useParams();

    const url = `http://localhost:8000/games/` + id

    const { data: games } = useFetch(url);

    console.log(games, 'games');

    return (
        <>
            {games &&
                <ul className="game-table-list">
                    <Typography gutterBottom sx={{ marginTop: '20px' }} variant="h2">{games.game}</Typography>
                    <li>Developer: {games.developer}</li>
                    <li>Publisher: {games.publisher ? games.publisher : "N/A"}</li>
                    <li>Ano: {games.year}</li>
                    <li>Descrição do Jogo: {games.dsc_jogo ? games.dsc_jogo : "N/A"}</li>
                    <li>Geração: {games.gen ? games.gen + 'ª' : ""}</li>
                </ul>
            }
        </>
    );
};

export default ListarJogos;