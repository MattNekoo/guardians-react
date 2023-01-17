import React from 'react'

import { TextField, Button, Typography } from '@mui/material'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const styles = theme => ({
  multilineColor: {
    color: 'red'
  }
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password
    }

    const res = await login(user);
    console.log(res, 'deu bom')
    // const addedGames = await res.json()
    // setGames((prevGames) => [...prevGames, addedGames]);

    setPassword("");
    setEmail("");
  };

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError]);

  return (
    <>
      <Typography gutterBottom sx={{ marginTop: '20px' }} variant="h2">Entrar</Typography>
      <Typography gutterBottom >Faça o Login</Typography>
      <div className='Form'>
        <form onSubmit={handleSubmit}>
          <Typography>Login:</Typography>
          <TextField
            fullWidth
            type="email"
            name="email"
            inputProps={{ style: { backgroundColor:'#3e4444' } }}
            value={email} required
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email"
            variant="outlined" />
          <Typography>Senha:</Typography>
          <TextField
            fullWidth
            type="password"
            name="password"
            inputProps={{ style: { backgroundColor:'#3e4444' } }}
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            label="Senha"
            variant="outlined" />
          {!loading && <Button className='btn' type="submit"
            value="cadastrar" color="primary"
            size="small" variant="contained"
            sx={{ marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }}>Entrar</Button>}
          {loading && <Button disabled className='btn' type="submit"
            value="cadastrar" color="primary"
            size="small" variant="contained"
            sx={{ marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }}>Aguarde...</Button>}
          <Button type="clear" value="limpar"
            color="primary" size="small"
            variant="contained"
            sx={{ marginLeft: '5px', marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }} >Limpar</Button>
          {error &&
            <Typography component="p" className='error'>
              {error}
            </Typography>
          }
        </form>
      </div>
    </>
  )
}

export default Login