import { Typography } from "@mui/material";
import React from "react";

const HowItWorks: React.FC = () => (
    <div className="d-flex flex-column w-100">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }} gutterBottom>
            How MayaJS Works
        </Typography>

        <Typography variant="body1" paragraph>
            MayaJS isn't a framework that replaces your existing tools. Instead, it's a standalone Node.js-based tool designed to accelerate your development process. Think of it as your personal backend assistant, ready to handle the heavy lifting.
            With an intuitive interface, you define your data models and relationships. MayaJS then automatically generates the database structure, API endpoints, and associated logic. This allows you to focus on building the frontend of your application or integrating with other services.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Design Your Data Models
        </Typography>

        <Typography variant="body1" paragraph>
            Use MayaJS's intuitive visual interface to define the structure of your data.
            Create "models" to represent the different types of information your application needs (e.g., products, users, orders).
            Specify the attributes (fields) for each model and their data types (text, numbers, dates, etc.).
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Set Relationships (Optional)
        </Typography>

        <Typography variant="body1" paragraph>
            Connect your models to reflect how they relate to each other.
            Establish relationships like one-to-one, one-to-many, or many-to-many.
            For example, link a "customer" model to an "order" model to track customer purchases.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Generate Your API
        </Typography>

        <Typography variant="body1" paragraph>
            With a single click, MayaJS automatically generates a complete RESTful API based on your data models.
            This API includes endpoints (URLs) for performing all the essential CRUD operations (create, read, update, delete) on your data.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Connect Your Frontend
        </Typography>

        <Typography variant="body1" paragraph>
            Use your favorite frontend framework or technology (React, Angular, Vue, etc.) to build your user interface.
            Integrate your frontend with the MayaJS-generated API to interact with your backend data.
            Utilize standard HTTP requests (GET, POST, PUT, DELETE) to fetch, create, update, or delete data.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Customize and Extend (Optional)
        </Typography>

        <Typography variant="body1" paragraph>
            While MayaJS provides a comprehensive backend out-of-the-box, you have the flexibility to customize your API further if needed.
            Add custom business logic or integrate with external services using code hooks or plugins.
        </Typography>

        <div className="my-3"></div>

        <Typography variant="body1" className="semibold">
            MayaJS takes care of the API, so you can focus on building amazing user experiences.
        </Typography>
    </div>
);

export default HowItWorks;