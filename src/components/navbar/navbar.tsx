import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ContentMenu from "../content-menu/content-menu.tsx";

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ '--AppBar-background': '#3a3e4a' }}>
                <Toolbar>
                    <img src="assets/img/logo.png" alt="" width="48" height="48" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}></img>
                    <span className="text--heading02 text--white bold ms-1" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>𝙈𝙖𝙮𝙖𝙅𝙎</span>
                    <IconButton
                        className="d-lg-none ms-auto"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                <Box
                    className="content--menu"
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <ContentMenu />
                </Box>
            </Drawer>
        </Box>
    );
};

export default Navbar;