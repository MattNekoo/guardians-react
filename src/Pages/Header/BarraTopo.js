import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';
import iconRocket from '../../assets/icon.png'
import './BarraTopo.css';

function BarraTopo(props) {
    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Contact'];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const navigate = useNavigate();
    const [busca, setBusca] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search?q=" + busca);
        setBusca("")
    }

    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <Box sx={{ overflow: 'hidden', position: 'fixed' }}>
            <AppBar sx={{ backgroundColor: '#06101f' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <NavLink to="/">
                        <img src={iconRocket} width={75} height={75} alt="Logo" />
                        </NavLink>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {/* <Link className='BarraTopo' to="/">Inicio</Link>
                    <Link className='BarraTopo' to="listar">Listar</Link>
                    <Link className='BarraTopo' to="edit">Cadastro/Edição</Link>
                    <Link className='BarraTopo' to="adivinhe">Adivinhe</Link> */}
                        <NavLink className='BarraTopo' to="/">Inicio</NavLink>
                        {!user && (
                            <>
                                <NavLink className='BarraTopo' to="login">Entrar</NavLink>
                                <NavLink className='BarraTopo' to="register">Cadastrar</NavLink>
                            </>
                        )}
                        {user && (
                            <>
                                <NavLink className='BarraTopo' to="listar">Listar</NavLink>
                                <NavLink className='BarraTopo' to="edit">Cadastro/Edição</NavLink>
                                <NavLink className='BarraTopo' to="adivinhe">Adivinhe</NavLink>
                                <NavLink className='BarraTopo' to="/posts/create">Novo Post</NavLink>
                                <NavLink className='BarraTopo' to="dashboard">Dashboard</NavLink>
                            </>
                        )}
                        <NavLink className='BarraTopo' to="sobre">Sobre</NavLink>
                        {user && (
                            <Button className='BarraTopo' onClick={logout}>Sair</Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

BarraTopo.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default BarraTopo;
