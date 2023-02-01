import React from 'react'
import { useFetch } from "../../hooks/useFetch"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import './ListaGeral.css'

const ListaGeral = () => {
    const url = "http://localhost:8000/games"
    const { data: games, error, loading } = useFetch(url);

    return (
        <>
            {loading && <p>Carregando jogos...</p>}
            {error && <p>{error}</p>}
            <Typography variant="h2">Lista de todos os jogos</Typography>
            <Card sx={{ background: '#dcdcdc' }}>
                {games && games.map((g) => (
                    <CardContent
                        sx={{
                            float: 'left',
                            margin: '10px',
                            width: '30%',
                            borderRadius: '15px'
                        }}>
                        <CardActionArea key={g.id}>
                            <Link style={{ textDecoration: 'none' }} to={`/listar/${g.id}`}>
                                <CardMedia
                                    style={{ height: 0, paddingTop: '100%' }}
                                    image={require('../../assets/icon.png')}
                                    height="50"
                                    alt="icon"
                                />
                            </Link>
                        </CardActionArea>
                    </CardContent>
                ))}
            </Card>
        </>
    )
}

export default ListaGeral