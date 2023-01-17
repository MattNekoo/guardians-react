import React from 'react'
import ListarJogos from './ListarJogos';

import '../index.css';
import { Typography } from '@mui/material';

const Zerados = () => {

  const g2022 = [
    { id: 1, game: "Control", developer: "Remedy Entertainment", year: 2019 },
    { id: 2, game: "Spiritfarer", developer: "Thunder Lotus Games", year: 2020 },
    { id: 3, game: "Death's Door", developer: "Acid Nerve", year: 2021 },
  ];

  return (
    <div >
      <Typography gutterBottom sx={{ marginTop: '20px', textAlign:'center' }} variant="h2">Titulo</Typography>
      Qualquer Coisa
    </div>
  )
}

export default Zerados;