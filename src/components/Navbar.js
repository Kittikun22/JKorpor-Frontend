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
import logo from '../asset/JKorpor.png';
import logo2 from '../asset/JKorpor2.png';
import { Link, Button } from '@mui/material';

const pages = [
    {
        pageName: 'หนังสือ',
        url: '#'
    },
    {
        pageName: 'คอร์สติว',
        url: '#'
    },
    {
        pageName: 'ข่าวสารและการรับสมัคร',
        url: '#'
    },
    {
        pageName: 'ทำความรู้จักกับข้อสอบ ก.พ.',
        url: '#'
    },
    {
        pageName: 'คำถามที่พบบ่อย',
        url: '#'
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
                            <Box component='img' src={logo} duration={0} sx={{ width: '150px', height: '60px' }} />
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
                                <MenuIcon sx={{ color: '#f6bb3d' }} />
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
                                color: '#f6bb3d',
                                textDecoration: 'none',
                            }}
                        >
                            <Box component='img' src={logo2} width='175px' duration={0} />
                        </Typography>


                        <Box sx={{ ml: 4, justifyContent: 'flex-start', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, key) => (
                                <Button
                                    href={page.url}
                                    onClick={handleCloseNavMenu}
                                    key={key}
                                    sx={{
                                        my: 1, color: '#f6bb3d', display: 'block', fontSize: '1rem'
                                    }}
                                >
                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                        {page.pageName}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
                <Box sx={{ height: '5px', bgcolor: '#f6bb3d' }} />
            </AppBar >
        </>
    );
};
export default Navbar;
