import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

import './Adivinhe.css';
import { useCounterContext } from '../../hooks/useCounterContext';
import { useFetch } from "../../hooks/useFetch"
const url = "http://localhost:8000/games"


const Adivinhe = () => {

    const { data: games, httpConfig } = useFetch();
    console.log(games, 'data');

    const [pickedWord, setPickedWord] = useState("");
    const [pickedTip, setPickedTip] = useState("");
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [guesses, setGuesses] = useState(4)
    // const [score, setScore] = useState(0)

    const stages = [0, 1]
    const [state, setState] = useState(1)

    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const { counter } = useCounterContext();


    const pickGame = () => {
        const game = Object.keys(games)
        const indexRandom =
            game[Math.floor(Math.random() * Object.keys(game).length)]

        const jogoAleatorio = games[indexRandom]['game'];
        const dica = games[indexRandom]['developer']

        return { dica, jogoAleatorio };
    }

    const startGame = () => {
        clearLetterStates();

        const { dica, jogoAleatorio } = pickGame();

        let wordLetters = jogoAleatorio.split("");

        wordLetters = wordLetters.map((i) => i.toLowerCase())

        setPickedWord(jogoAleatorio);
        setPickedTip(dica);
        setLetters(wordLetters);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter)
        setLetter("")
        letterInputRef.current.focus();
    }

    const handleStart = () => {
        clearLetterStates();
        setGuesses(4);
        setState(0);
        handleStart();
        startGame();
    }

    const verifyLetter = (letter) => {
        const normalizedLetter = letter.toLowerCase();

        if (guessedLetters.includes(normalizedLetter) ||
            wrongLetters.includes(normalizedLetter)) {
            return;
        }

        if (letters.includes(normalizedLetter)) {
            setGuessedLetters((actualGuessedLetters) => [
                ...actualGuessedLetters,
                normalizedLetter
            ]);
        } else {
            setWrongLetters((actualWrongLetters) => [
                ...actualWrongLetters,
                normalizedLetter
            ]);
            setGuesses((actualGuesses) => actualGuesses - 1)
        }
        return;
    }

    const clearLetterStates = () => {
        setGuessedLetters([])
        setWrongLetters([])
    }

    useEffect(() => {
        if (games) {
            pickGame()
            startGame()
        }
    }, [games]);

    useEffect(() => {

        if (guesses <= 0) {
            clearLetterStates();
            setGuesses(4);
            setState(0);
        }

        const uniqueletters = [...new Set(letters)];

        // if (guessedLetters.length === uniqueletters.length) {
        //     setScore((actualScore) => actualScore += 10);
        //     clearLetterStates();
        //     setGuesses(4);
        // }
    }, [guesses, guessedLetters]);

    return (
        <div className="game">
            {/* <p className='points'>
                <span>Pontuação: {score}</span>
            </p> */}
            <Typography gutterBottom sx={{ marginTop: '20px', textAlign: 'center' }} variant="h2">Joguinho de Adivinhar</Typography>

            <Typography gutterBottom variant="h6" component="div">
                Valor do Contador para Context: {counter}
            </Typography>
            <h2 className='tip'>
                Desenvolvedora: <span>{pickedTip}</span>
            </h2>
            <p>Tentativas: {guesses}</p>
            <div className='wordContainer'>
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className='letter'>{letter}</span>
                    ) : (
                        <span key={i} className='blanksquare'></span>)
                ))}
            </div>
            <div className="letterContainer">
                <form onSubmit={handleSubmit}>
                    <input type='text'
                        name='letter'
                        maxLength='1'
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef} />
                    <button>Jogar!</button>
                </form>
            </div>
            <button onSubmit={handleStart}>Começar</button>
            <div className="wrongLettersContainer">
                <p>Letras Usadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}

export default Adivinhe