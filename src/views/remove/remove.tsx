import { Typography } from "@mui/material";
import React from "react";

const Remove: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Remove (Query and Delete)
        </Typography>

        <Typography variant="body1" className="mb-3">
            <strong>Purpose:</strong> The Remove module allows you to query your data and delete multiple records that match specific criteria in a single operation.  
            <br /><strong>Why It's Important:</strong> Efficiently managing data often requires removing outdated, incorrect, or irrelevant records. The Remove module simplifies this process by combining querying and deletion into a single workflow.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Key Components
        </Typography>

        <ul className="list-unstyled mb-4">
            <li>
                <strong>Schema:</strong> The top-level object defining the data model you're working with.
            </li>
            <li>
                <strong>Model Names (e.g., "task"):</strong> Properties within the schema object correspond to the names of your models.
            </li>
            <li>
                <strong>Filter Criteria:</strong> Within each model's object, specify the filter criteria using attribute-value pairs (e.g., "status": false). The filter criteria structure is consistent with the Select and Set modules, allowing you to use various operators (like equals, greater than, less than, contains, etc.) to define the records you want to delete.
            </li>
        </ul>
    </div>
);

export default Remove;
