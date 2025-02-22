import { Typography } from "@mui/material";
import React from "react";

const Introduction: React.FC = () => (
    <div className="d-flex flex-column w-100">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Your Backend, Up and Running in Minutes
        </Typography>
        <Typography variant="body1">
            MayaJS is a new way to rapidly develop powerful server-side applications. We call it the "no-code backend builder."

            MayaJS empowers you to create fully functional backend systems, complete with databases and APIs. It streamlines the creation of essential CRUD (Create, Read, Update, Delete) operations, along with advanced features like filtering, pagination, and sorting.
        </Typography>
        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ fontWeight: 500 }}>
            Key Features
        </Typography>
        <ul className="list-unstyled">
            <li>
                <Typography variant="body1">
                    <strong>Speed:</strong> Get your backend up and running in minutes, not days or weeks.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>Simplicity:</strong> No coding required, just a visual interface to define your data models.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>Power:</strong> Generate a full-featured RESTful API with advanced querying capabilities.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>Flexibility:</strong> Use the generated API with any frontend framework or technology.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>Security:</strong> Built-in authentication and authorization features to protect your data.
                </Typography>
            </li>
        </ul>
        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ fontWeight: 500 }}>
            Get Started
        </Typography>
        <Typography variant="body1">
            Eager to start building? <a href="#">Join us</a> and discover how MayaJS can revolutionize your backend development workflow.
        </Typography>
    </div>
);

export default Introduction;