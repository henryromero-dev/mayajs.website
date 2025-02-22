import { Typography } from "@mui/material";
import React from "react";
import AppTheme from "../../theme/app-theme.tsx";

const Crud: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Create, Update, Delete
        </Typography>

        <Typography variant="body1" className="mb-3" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> The CRUD module is your command center for managing data within your MayaJS backend. It provides a streamlined way to create new records, retrieve existing ones, update their information, and delete them when no longer needed.
            <br /><strong>Why It's Important:</strong> CRUD operations are the backbone of virtually every data-driven application. The CRUD module simplifies these fundamental actions, allowing you to interact with your data seamlessly.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Key Components
        </Typography>

        <ul className="list-unstyled mb-3">
            <li>
                <strong>Schema:</strong> Similar to the Select module, the schema is the top-level object that defines the data model you're working with.
            </li>
            <li>
                <strong>Model Names (e.g., "product"):</strong> Properties within the schema object correspond to the names of your models.
            </li>
            <li>
                <strong>Data Objects:</strong> Within each model's object, you provide the data you want to create, update, or delete. The structure of this data object should mirror the attributes defined in your model.
            </li>
        </ul>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Operations
        </Typography>

        <ul className="list-unstyled mb-4">
            <li>
                <strong>Create:</strong> To create a new record, send a POST request to the CRUD endpoint with a data object containing the values for the new record.
            </li>
            <li>
                <strong>Update:</strong> To update an existing record, send a POST request to the CRUD endpoint. Include the $guid and $hash values obtained from the Select operation, along with a data object containing the updated values.
            </li>
            <li>
                <strong>Delete:</strong> To delete an existing record, send a POST request to the CRUD endpoint. Include the $guid, $hash, and a parameter named $remove set to true in your request.
            </li>
        </ul>
    </div>
);

export default Crud;