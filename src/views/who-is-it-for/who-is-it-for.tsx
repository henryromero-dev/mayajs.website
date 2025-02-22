import { Typography } from "@mui/material";
import React from "react";

const WhoIsItFor: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }} gutterBottom>
            Who is MayaJS For?
        </Typography>
        <Typography variant="body1" gutterBottom>
            No matter your role or experience level, MayaJS offers a way to build robust backends without the complexity of traditional coding. It's a tool for everyone who wants to unlock the power of the backend and turn their ideas into reality.
            <br />
            MayaJS is designed for a diverse range of users who want to build powerful backend systems quickly and efficiently, regardless of their technical background:
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Businesses of All Sizes
        </Typography>

        <Typography variant="body1" gutterBottom>
            Whether you're a startup launching an MVP, a small business managing inventory, or a large enterprise handling complex logistics (ecommerce, packing, delivery), MayaJS accelerates your backend development, reducing time-to-market.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Non-Technical Teams
        </Typography>

        <Typography variant="body1" gutterBottom>
            MayaJS empowers teams without deep coding expertise to create custom backend solutions. Marketing, operations, or project management teams can build internal tools or dashboards without relying heavily on developers.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Students & Educators
        </Typography>

        <Typography variant="body1" gutterBottom>
            MayaJS is an ideal tool for learning the core concepts of backend development, APIs, and databases. Students can build projects to experiment with different architectures and data models, while educators can use MayaJS to demonstrate backend principles in a practical way.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Developers & Prototypers
        </Typography>

        <Typography variant="body1" gutterBottom>
            Even experienced developers can benefit from MayaJS. It's perfect for rapidly prototyping ideas, spinning up temporary backends for testing, or handling less complex parts of an application while focusing on core features that require custom code.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Anyone with an Idea
        </Typography>

        <Typography variant="body1" gutterBottom>
            If you have an idea for a web or mobile app, but the backend seems daunting, MayaJS makes it accessible. You can create a working backend without getting bogged down in the technical details, allowing you to focus on bringing your vision to life.
        </Typography>
    </div>
);

export default WhoIsItFor;
