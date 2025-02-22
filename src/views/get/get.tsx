import { Typography } from "@mui/material";
import React from "react";
import AppTheme from "../../theme/app-theme.tsx";

const Get: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            GET (Query)
        </Typography>

        <Typography variant="body1" className="mb-3" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> The GET module is your tool for precisely retrieving data from your MayaJS backend. It allows you to perform flexible queries based on specific criteria, returning only the records that match your conditions.
            <br /><strong>Why It's Important:</strong> In most applications, you rarely need to fetch all the data at once. The GET module empowers you to efficiently pinpoint the exact information you require, optimizing data retrieval and processing.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Key Components:
        </Typography>

        <ul className="list-unstyled mb-3">
            <li><strong>Schema:</strong> The top-level object defining the data model you're working with.</li>
            <li><strong>Model Names (e.g., "customer"):</strong> Properties within the schema object correspond to the names of your models.</li>
            <li><strong>Filter Criteria:</strong> Within each model's object, you specify the filter criteria using attribute-value pairs. The filter criteria structure is the same as used in the Select and Get modules, allowing you to leverage a wide range of operators for precise filtering.</li>
        </ul>
    </div>
);

export default Get;