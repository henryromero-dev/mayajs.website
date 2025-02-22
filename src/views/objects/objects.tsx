import { Typography } from "@mui/material";
import React from "react";
import AppTheme from "../../theme/app-theme.tsx"; // Adjust the import path as necessary

const Objects: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Read Objects
        </Typography>
        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Retrieves a list of objects (entities/tables) that match specified criteria. Filters allow you to narrow down the results based on specific attributes or values.
            <br /><strong>Why It's Important:</strong> This is essential for efficiently accessing and managing your data. Filtering helps you quickly find the specific objects you need, whether it's a particular customer, a type of product, or a set of orders within a date range.
        </Typography>
        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Create Object
        </Typography>
        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Adds a new object (entity/table) to your database. This involves defining the object's attributes (columns) and their values.
            <br /><strong>Why It's Important:</strong> Creating objects is fundamental for populating your database with the data your application needs to function. Whether it's adding new products to an inventory, registering users, or recording transactions, this operation is key.
        </Typography>
        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Delete Object
        </Typography>
        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Removes a specific object (entity/table) from your database. This is a permanent action and should be used with caution.
            <br /><strong>Why It's Important:</strong> Deleting objects is necessary for managing your data and keeping your database clean and up-to-date. Whether it's removing outdated records, correcting errors, or cleaning up unused resources, this operation is essential.
        </Typography>
    </div>
);

export default Objects;