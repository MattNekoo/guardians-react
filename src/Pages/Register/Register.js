import { TextField, Button, Typography } from '@mui/material'
import React from 'react'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const {createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const user = {
            displayName: login,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais")
            setLogin("");
            setPassword("");
            setEmail("");
            setConfirmPassword("");
            return;
        }

        const res = await createUser(user);
        console.log(res, 'deu bom')
        // const addedGames = await res.json()
        // setGames((prevGames) => [...prevGames, addedGames]);

        setLogin("");
        setPassword("");
        setEmail("");
        setConfirmPassword("");
    };

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    },[authError]);

    return (
        <>
            <Typography gutterBottom sx={{ marginTop: '20px' }} variant="h2">Cadastre-se</Typography>
            <Typography gutterBottom >Crie seu usuário e respire</Typography>
            <div className='Form'>
                <form onSubmit={handleSubmit}>
                    <Typography component="h3">
                        <TextField
                            fullWidth
                            type="text"
                            name="user"
                            inputProps={{ style: { backgroundColor:'#3e4444' } }}
                            value={login} required
                            onChange={(e) => setLogin(e.target.value)}
                            id="user"
                            label="Usuário"
                            variant="outlined" />
                    </Typography>
                    <Typography component="h3">
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
                    </Typography>
                    <Typography component="h3">
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
                    </Typography>
                    <Typography component="h3">
                        <TextField
                            fullWidth
                            type="password"
                            name="confirmPassword"
                            inputProps={{ style: { backgroundColor:'#3e4444' } }}
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            id="confirmPassword"
                            label="Confirme a senha"
                            variant="outlined" />
                    </Typography>
                    {!loading && <Button className='btn' type="submit"
                        value="cadastrar" color="primary"
                        size="small" variant="contained"
                        sx={{ marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }}>Cadastrar</Button>}
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

export default Register