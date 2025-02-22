import { Typography } from "@mui/material";
import React from "react";
import AppTheme from "../../theme/app-theme.tsx"; // Adjust the import path as necessary

const Schema: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Create Tenant
        </Typography>
        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Establishes a new, isolated environment (a "tenant") within MayaJS to store and manage your application's data. Think of it as creating a separate space for your project, complete with its own database and resources.
            <br /><strong>Why It's Important:</strong> Tenants provide separation and organization for different projects or applications, ensuring data security and preventing conflicts between them.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Delete Tenant
        </Typography>
        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Removes a tenant and all associated data permanently. This is a destructive action and should be used with caution.
            <br /><strong>Why It's Important:</strong> Deleting a tenant can be useful for cleaning up unused resources or when a project is no longer needed.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Create Schema
        </Typography>
        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Defines the structure of your database within a specific tenant. This involves specifying the tables (e.g., "products," "users"), the columns within each table (e.g., "product_name," "price," "email"), and how they relate to each other.
            <br /><strong>Why It's Important:</strong> The schema is the blueprint for your data. It ensures data consistency and integrity, making it easier to store, retrieve, and manage information within your application.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Delete Schema
        </Typography>
        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Removes the database schema and all the data contained within it for a specific tenant. This is a destructive action and should be used with caution.
            <br /><strong>Why It's Important:</strong> Deleting a schema might be necessary if you need to start over with a new data structure or if a project is being discontinued.
        </Typography>
    </div>
);

export default Schema;