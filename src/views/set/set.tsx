import { Typography } from "@mui/material";
import React from "react";
import AppTheme from "../../theme/app-theme.tsx";

const Set: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Set (Query and Update)
        </Typography>

        <Typography variant="body1" className="mb-3" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> The Set module empowers you to perform advanced queries on your data and, optionally, update multiple records that match specific criteria in a single operation.
            <br /><strong>Why It's Important:</strong> In many scenarios, you need to target a subset of your data based on conditions and potentially modify those records. The Set module combines querying and updating capabilities, streamlining this common workflow.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Key Components
        </Typography>

        <ul className="list-unstyled mb-3">
            <li>
                <strong>Schema:</strong> The top-level object defining the data model you're working with.
            </li>
            <li>
                <strong>Model Names (e.g., "task"):</strong> Properties within the schema object correspond to the names of your models.
            </li>
            <li>
                <strong>Filter Criteria:</strong> Within each model's object, you specify the filter criteria using attribute-value pairs (e.g., "status": true). The filter criteria structure is the same as used in the Select module, allowing you to use various operators for filtering (like equals, greater than, less than, contains, etc.).
            </li>
            <li>
                <strong>Update Data:</strong> If you want to update the records that match your filter criteria, include a nested object named newval within the filter criteria. The newval object should contain the updated values for the attributes you want to modify.
            </li>
        </ul>
    </div>
);

export default Set;
