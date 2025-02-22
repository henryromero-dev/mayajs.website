import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar.tsx";
import Home from "./views/home/home.tsx";
import "./styles.scss";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContentMenu from "./components/content-menu/content-menu.tsx";
import Routing from "./routing.tsx";
import About from "./components/about/about.tsx";

function App() {
    const theme = createTheme({ 
        cssVariables: true,
    });

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="min-h-screen bg-gray-100">
                    <Navbar />
                    <div className="d-flex w-100">
                        <Home />
                    </div>
                    <div className="d-flex w-100 container--standard mx-auto py-lg-5 mt-lg-4">
                        <div className="d-none d-lg-flex content--menu px-lg-2">
                            <ContentMenu />
                        </div>
                        <div className="px-3 px-lg-4 w-100 app--content py-4 py-lg-0">
                            <Routing />
                        </div>
                        <div className="d-none d-lg-flex flex-column about px-lg-2">
                            <About />
                        </div>
                    </div>
                    <div className="d-flex d-lg-none flex-column about px-lg-2 w-100 align-items-center mb-4">
                        <About />
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
