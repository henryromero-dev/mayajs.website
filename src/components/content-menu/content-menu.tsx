import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AppTheme from "../../theme/app-theme.tsx";

const ContentMenu: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <Fragment>
            <List>
                <ListItem disablePadding className="menu--title px-3 mb-2 mt-lg-2 mt-5">
                    <Typography variant="body2" sx={{ fontWeight: 500, ...AppTheme.typography.desktop03 }}>
                    Concepts
                    </Typography>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/") ? "active" : ""}`}>
                    <Link to="/">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Introduction
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/who-is-it-for") ? "active" : ""}`}>
                    <Link to="/who-is-it-for">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Who is it for
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/how-it-works") ? "active" : ""}`}>
                    <Link to="/how-it-works">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        How it works
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className="menu--title px-3 mt-lg-5 mt-4 mb-2">
                    <Typography variant="body2" sx={{ fontWeight: 500, ...AppTheme.typography.desktop03 }}>
                    Database
                    </Typography>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/schema") ? "active" : ""}`}>
                    <Link to="/schema">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Schema
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/objects") ? "active" : ""}`}>
                    <Link to="/objects">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Objects
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/properties") ? "active" : ""}`}>
                    <Link to="/properties">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Properties
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className="menu--title px-3 mt-lg-5 mt-4 mb-2">
                    <Typography variant="body2" sx={{ fontWeight: 500, ...AppTheme.typography.desktop03 }}>
                    Security
                    </Typography>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/roles") ? "active" : ""}`}>
                    <Link to="/roles">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Roles and permissions
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/authentication") ? "active" : ""}`}>
                    <Link to="/authentication">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Authentication
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className="menu--title px-3 mt-lg-5 mt-4 mb-2">
                    <Typography variant="body2" sx={{ fontWeight: 500, ...AppTheme.typography.desktop03 }}>
                    Rest API
                    </Typography>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/select") ? "active" : ""}`}>
                    <Link to="/select">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Select
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/crud") ? "active" : ""}`}>
                    <Link to="/crud">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Create, Update, Delete
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/get") ? "active" : ""}`}>
                    <Link to="/get">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Get
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/set") ? "active" : ""}`}>
                    <Link to="/set">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Set
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/remove") ? "active" : ""}`}>
                    <Link to="/remove">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Remove
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/storage") ? "active" : ""}`}>
                    <Link to="/storage">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Storage
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className="menu--title px-3 mt-lg-5 mt-4 mb-2">
                    <Typography variant="body2" sx={{ fontWeight: 500, ...AppTheme.typography.desktop03 }}>
                    Advanced
                    </Typography>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/events") ? "active" : ""}`}>
                    <Link to="/events">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Events
                    </Typography>
                    </Link>
                </ListItem>
                <ListItem disablePadding className={`menu--option ${isActive("/hooks") ? "active" : ""}`}>
                    <Link to="/hooks">
                    <Typography variant="body2" sx={AppTheme.typography.desktop03}>
                        Hooks
                    </Typography>
                    </Link>
                </ListItem>
            </List>
        </Fragment>
    );
}

export default ContentMenu;