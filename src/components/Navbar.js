import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../asset/LOGO1.png';
import logo2 from '../asset/LOGO2.png';
import { Link, Button } from '@mui/material';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { FaTiktok, FaInstagram } from 'react-icons/fa'


const pages = [
    {
        pageName: 'หนังสือเตรียมสอบ',
        url: '/books'
    },
    {
        pageName: 'คอร์สติวสอบ',
        url: '/courses'
    },
    {
        pageName: 'ข่าวสาร ก.พ.',
        url: '/news'
    },
    {
        pageName: 'รู้จักการสอบ ก.พ.',
        url: '/whatIsKorpor'
    },
    {
        pageName: 'คำถามที่พบบ่อย',
        url: '/faq'
    }];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="sticky"
                sx={{ background: '#2C3639' }}
            >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Box component='img' src={logo} duration={0} sx={{ height: '100px' }} />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon sx={{ color: '#ffba00' }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                }}
                            >
                                {pages.map((page, key) => (
                                    <MenuItem
                                        component={Link}
                                        href={page.url}
                                        onClick={handleCloseNavMenu}
                                        key={key}
                                    >
                                        <Typography textAlign="center">{page.pageName}</Typography>

                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{

                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#ffba00',
                                textDecoration: 'none',
                            }}
                        >
                            <Box component='img' src={logo2} width='175px' duration={0} />
                        </Typography>


                        <Box sx={{ flexDirection: 'column', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 1, mr: 2 }}>
                                <a target='_blank' rel='noreferrer' href="https://www.facebook.com/Jkorpor">
                                    <BsFacebook size="30px" color='#ffba00' />
                                </a>
                                <a target='_blank' rel='noreferrer' href="https://www.instagram.com/jkorportutor">
                                    <FaInstagram size="20px" color='#2C3639' style={{ background: '#ffba00', borderRadius: 50, padding: '5px' }} />
                                </a>
                                <a target='_blank' rel='noreferrer' href="https://www.tiktok.com/@jkorportutor">
                                    <FaTiktok size="20px" color='#2C3639' style={{ background: '#ffba00', borderRadius: 50, padding: '5px' }} />
                                </a>
                                <a target='_blank' rel='noreferrer' href="https://www.youtube.com/@user-jp2jo4eh1w/featured">
                                    <BsYoutube size="20px" color='#2C3639' style={{ background: '#ffba00', borderRadius: 50, padding: '5px' }} />
                                </a>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {pages.map((page, key) => (
                                    <Button
                                        href={page.url}
                                        onClick={handleCloseNavMenu}
                                        key={key}
                                        sx={{
                                            my: 1, color: '#ffba00'
                                        }}
                                    >
                                        <Typography sx={{ fontSize: '1.1rem' }}>
                                            {page.pageName}
                                        </Typography>
                                    </Button>

                                ))}
                            </Box>

                        </Box>
                    </Toolbar>
                </Container>
                <Box sx={{ height: '5px', bgcolor: '#ffba00' }} />
            </AppBar >
        </>
    );
};
export default Navbar;
