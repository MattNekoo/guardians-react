import { Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Typography gutterBottom sx={{ marginTop: '20px', textAlign: 'center' }} variant="h2">Sobre o Guardians</Typography>

      <p>
        Este projeto consiste em projeto feito com React no front-end e firebase no back-end.
      </p>
    </div>
  )
}

export default About