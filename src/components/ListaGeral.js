import React from 'react'
import ListarJogos from './ListarJogos'
import { useFetch } from "../hooks/useFetch"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const ListaGeral = () => {
    const url = "http://localhost:8000/games"
    const { data: games, error, loading } = useFetch(url);

    return (
        <>
            {loading && <p>Carregando jogos...</p>}
            {error && <p>{error}</p>}
            <Typography gutterBottom sx={{ marginTop: '20px' }} variant="h2"></Typography>
            <Card>
                {games && games.map((g) => (
                    <CardContent
                        sx={{
                            float: 'left',
                            margin: '10px',
                            width: '30%',
                            borderRadius: '15px',
                            backgroundColor: 'green',
                        }}>
                        <CardActionArea key={g.id}>
                            <Link style={{ textDecoration: 'none' }} to={`/listar/${g.id}`}>
                            <CardMedia
                                style={{ height: 0, paddingTop: '100%' }}
                                image={require('./../assets/icon.png')}
                                height="50"
                                alt="icon"
                            />
                            </Link>
                        </CardActionArea>
                    </CardContent>
                ))}
            </Card>

            {/* // <div>
                //     {games && games.map((g) => (
                //         <div className="row" key={g.id}>
                //             <div className="pure-u-1 pure-u-md-1-3">
                //                 <div className="game-table-header row">
                //                     <h3>{g.game}</h3>
                //                     <ul className="game-table-list">
                //                         <li>IMAGEM IMAGINÁRIA</li>
                //                         <Link to={`/listar/${g.id}`}>Detalhe</Link>
                //                     </ul>
                //                 </div>
                //             </div>
                //         </div>
                //     ))}
                // </div> */}

        </>
    )
}

export default ListaGeral