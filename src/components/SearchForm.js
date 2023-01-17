import { useSearchParams, Link } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

import { useCounterContext } from '../hooks/useCounterContext';

const SearchForm = () => {

    const [searchParams] = useSearchParams()

    const url = "http://localhost:8000/games?" + searchParams;

    const { data: games } = useFetch(url);

    const { counter } = useCounterContext();

    return (
        <div clas>
            <Typography gutterBottom color='#691e19' variant="h6" component="div">
                Valor do Contador para Context: {counter}
            </Typography>

            <h1 className='inicio' align="center" margin='auto'>Busca de Jogos</h1>
            {games && games.map((g) => (
                <CardContent sx={{ float: 'left', width: '20%', padding: '15px' }}>
                    <CardActionArea key={g.id}>
                        {/* <CardMedia
                        component="img"
                        height="140"
                        alt="green iguana"
                    /> */}
                        <Link style={{ textDecoration: 'none' }} to={`/listar/${g.id}`}>
                            <CardContent >
                                <Typography gutterBottom color='#691e19' variant="h4" component="div">
                                    {g.game}
                                </Typography>
                            </CardContent>
                        </Link>
                    </CardActionArea>
                </CardContent>
            ))}
        </div>
    )
}

export default SearchForm