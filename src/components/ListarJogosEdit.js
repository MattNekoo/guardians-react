import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Card } from "react-bootstrap";
import { padding } from "@mui/system";

const ListarJogosEdit = (props) => {

    const { game, developer, year, img, publisher, dsc_jogo, gen, id, handleRemove } = props;

    return (
        <Card sx={{ maxWidth: 345, }}>
            <CardContent sx = {{ float: 'left',  width: '20%', padding: '15px', }}>
                {/* <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {game}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {developer}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                        {publisher}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {gen ? gen + 'ª' : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dsc_jogo ? dsc_jogo : "N/A"}
                    </Typography>
                </CardContent>
            <CardActions>
            <Button variant="outlined" size="small">Editar</Button>
            <Button variant="outlined" size="small" onClick={() => handleRemove(id)} startIcon={<DeleteIcon />}>Deletar</Button>
            </CardActions>
            </CardContent>
        </Card>

        // <div className="row">
        //     <div className="pure-u-1 pure-u-md-1-3">
        //         <div className="game-table-header row">

        //             <h3>{game}</h3>
        //             <img src={img} />
        //             <ul className="game-table-list">
        //                 <li>Developer: {developer}</li>
        //                 <li>Publisher: {publisher ? publisher : "N/A"}</li>
        //                 <li>Ano: {year}</li>
        //                 <li>Descrição do Jogo: {dsc_jogo ? dsc_jogo : "N/A"}</li>
        //                 <li>Geração: {gen ? gen+'ª' : ""}</li>
        //             </ul>
        //             <Button variant="outlined" size="small">Editar</Button>
        //             <Button variant="outlined" size="small" onClick={() => handleRemove(id)} startIcon={<DeleteIcon />}>Deletar</Button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ListarJogosEdit;