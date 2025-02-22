import { Typography } from "@mui/material";
import React from "react";
import AppTheme from "../../theme/app-theme.tsx"; // Adjust the import path as necessary

const Roles: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Create Role
        </Typography>

        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Creates a new role within a tenant, defining a set of permissions that can be assigned to users or user extensions.
            <br /><strong>Why It's Important:</strong> Roles are essential for controlling access to data and actions within your application. By assigning roles, you can determine who can view, modify, or delete specific objects or perform certain operations. When creating a new object intended for use as a user extension (i.e., objects that can log in), creating a corresponding role is mandatory to enable login functionality.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Update Role
        </Typography>

        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Modifies the permissions associated with an existing role.
            <br /><strong>Why It's Important:</strong> As your application evolves, your access control needs may change. Updating roles allows you to adapt permissions to reflect these changes without having to create entirely new roles.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Delete Role
        </Typography>

        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Removes a role from the tenant.
            <br /><strong>Why It's Important:</strong> Deleting unused roles helps keep your permission system organized and prevents confusion.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            List Roles
        </Typography>

        <Typography variant="body1" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> Retrieves a list of all roles defined within a tenant.
            <br /><strong>Why It's Important:</strong> This provides an overview of your application's permission structure, allowing you to easily manage and audit roles.
        </Typography>
        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ ...AppTheme.typography.heading03, fontWeight: 500 }}>
            Key Points:
        </Typography>
        <ul className="list-unstyled"><li><strong>Default Roles:</strong> When you create a schema, MayaJS automatically creates default roles for user extensions. However, if you create a new object intended as a user extension, you must explicitly create a role for it to enable login capabilities.</li><li><strong>Permissions:</strong> Roles are associated with permissions that grant or deny access to specific actions (read, insert, update, delete) on objects. These permissions are exclusive, meaning a role cannot have both read and delete permissions on the same object.</li><li><strong>Visibility:</strong> The "Visibility" property of an object's body interacts with roles and permissions. It determines whether an object is visible to users with a specific role, further refining access control.</li>
        </ul>
    </div>
);

export default Roles;