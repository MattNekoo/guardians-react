import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Zona Fantasma</h1>
            <Typography>
                Parece que o lugar para onde você quer ir não está nessa dimensão.
                Vá para a <Link to={'/'}>página inicial</Link>
            </Typography>
        </div>
    )
}

export default NotFound