import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import './about.scss';
import AppTheme from "../../theme/app-theme.tsx";

const About: React.FC = () => (
    <Fragment>
       <div className="d-flex flex-column mb-3">
            <Typography variant="body2" className="about__title mb-2 mx-auto mx-lg-0" sx={{ fontWeight: 500, ...AppTheme.typography.desktop03 }}>
                Our Partners
            </Typography>
            <div className="d-flex w-100">
                <img src="assets/img/criptomonedases.svg" alt="criptomonedas.es" width={'100%'} />
            </div>
        </div>
        <div className="d-flex flex-column">
            <Typography variant="body2" className="mb-2 about__title mx-auto mx-lg-0" sx={{ fontWeight: 500, ...AppTheme.typography.desktop03 }}>
                Contact us
            </Typography>
            <div className="about__text mb-lg-3">
                <Typography variant="body2" sx={ AppTheme.typography.desktop03 } onClick={() => window.location.href = 'mailto:contact@mayajs.com'} style={{ cursor: 'pointer' }}>
                    contact@mayajs.com
                </Typography>
            </div>
        </div> 
    </Fragment>
);

export default About;