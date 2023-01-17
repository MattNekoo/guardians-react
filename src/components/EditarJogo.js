import React from 'react'
import { useState } from 'react'
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';


const EditarJogo = ({ game }) => {

    const [lista, setLista] = useState(game);
    const [name, setName] = useState(lista ? lista[0].game : "");
    const [dev, setDev] = useState(lista ? lista[0].developer : "");
    const [pub, setPub] = useState(lista ? lista[0].publisher : "");
    const [year, setYear] = useState(lista ? lista[0].year : "");
    const [dsc, setDsc] = useState(lista ? lista[0].dsc_jogo : "");
    const [gen, setGen] = useState(lista ? lista[0].gen : "");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName("");
        setDev("");
    }

    return (
        <div>
            <Typography gutterBottom sx={{ marginTop: '20px' }} variant="h2">Editar Jogo no BD</Typography>
            <div className='Form'>
                <form onSubmit={handleSubmit}>
                    <Typography>Nome do Jogo:</Typography>
                    <TextField fullWidth type="text" name="nomejogo" required inputProps={{ style: { backgroundColor:'#3e4444' } }} value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" variant="outlined" />
                    <Typography>Developer:</Typography>
                    <TextField fullWidth type="text" name="developer" required inputProps={{ style: { backgroundColor:'#3e4444' } }} value={dev} onChange={(e) => setDev(e.target.value)} id="outlined-basic" variant="outlined" />
                    <Typography>Publicadora:</Typography>
                    <TextField fullWidth type="text" name="publicadora" required inputProps={{ style: { backgroundColor:'#3e4444' } }} value={pub} onChange={(e) => setPub(e.target.value)} id="outlined-basic" variant="outlined" />
                    <Typography>Data de Lançamento:</Typography>
                    <TextField fullWidth type="number" name="dt_lancamento" required inputProps={{ style: { backgroundColor:'#3e4444' } }} value={year} onChange={(e) => setYear(e.target.value)} id="outlined-basic" variant="outlined" />
                    <Typography>Geração:
                        <Select
                            fullWidth
                            labelId="gen"
                            id="gen"
                            value={gen}
                            label="Geração"
                            onChange={(e) => setGen(e.target.value)}
                        >
                            <MenuItem value={7}>7ª Gen</MenuItem>
                            <MenuItem value={8}>8ª Gen</MenuItem>
                            <MenuItem value={9}>9ª Gen</MenuItem>
                        </Select>
                    </Typography>
                    <Button type="submit" value="enviar" color="primary" size="small" variant="outlined" sx={{ marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }} >Editar</Button>
                    <Button type="clear" value="limpar" color="primary" size="small" variant="outlined" sx={{ marginLeft: '5px', marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }} >Limpar</Button>
                </form>
            </div>
        </div>

        // {/* </div>
        //     <div className='cadastro-jogo'>
        //         <h2> Editar Jogo no BD</h2>
        //         <form onSubmit={handleSubmit}>
        //             <label>
        //                 Nome do Jogo
        //                 <input type="text" name="nomejogo" placeholder="Nome do Jogo" value={name} onChange={handleChange} />
        //                 <br></br>
        //             </label>
        //             <label>
        //                 Developer
        //                 <input type="text" name="dev" placeholder="Nome da Developer" value={dev} onChange={(e) => setDev(e.target.value)} />
        //             </label>
        //             <br></br>
        //             <label>
        //                 Publicadora
        //                 <input type="text" name="publicadora" placeholder="Nome da Publicadora" value={pub} onChange={(e) => setPub(e.target.value)} />
        //             </label>
        //             <br></br>
        //             <label>
        //                 Ano de Lançamento
        //                 <input type="number" name="dt_lancamento" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Data de Lançamento" />
        //             </label>
        //             <br></br>
        //             <label>
        //                 Descrição
        //                 <textarea name="dsc_jogo" placeholder="Descrição do Jogo" value={dsc} onChange={(e) => setDsc(e.target.value)}></textarea>
        //             </label>
        //             <select name="gen" onChange={(e) => setGen(e.target.value)} value={gen}>
        //                 <option value="7ª">7ª Gen</option>
        //                 <option value="8ª">8ª Gen</option>
        //                 <option value="9ª">9ª Gen</option>
        //             </select>
        //             <input type="submit" value="enviar" />
        //         </form>
        //     </div> */}
    )
}

export default EditarJogo