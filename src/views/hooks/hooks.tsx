import { Typography } from "@mui/material";
import React from "react";
import AppTheme from "../../theme/app-theme.tsx"; // Adjust the import path as necessary

const Hooks: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ ...AppTheme.typography.heading02, fontWeight: 500 }}>
            Hooks (Custom Event Triggers)
        </Typography>

        <Typography variant="body1" className="mb-3" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> The Hooks module enables you to define custom logic that is executed automatically during specific CRUD operations or searches.  
            <br /><strong>Why It's Important:</strong> Hooks allow you to modify or extend system behavior dynamically, ensuring your business logic is executed consistently and efficiently.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ ...AppTheme.typography.heading03, fontWeight: 500 }}>
            Hook Types
        </Typography>

        <ul className="list-unstyled mt-3 text-base">
            <li><strong>Before Create:</strong> Executes before a record is created, allowing you to validate or modify the incoming data.</li>
            <li><strong>After Create:</strong> Executes after a record is created, useful for triggering actions like sending notifications or updating related entities.</li>
            <li><strong>Before Update:</strong> Executes before a record is updated, allowing you to verify or adjust changes.</li>
            <li><strong>After Update:</strong> Executes after a record is updated, often used to propagate changes to other parts of the system.</li>
            <li><strong>Before Delete:</strong> Executes before a record is deleted, enabling validation or cleanup operations.</li>
            <li><strong>After Delete:</strong> Executes after a record is deleted, useful for logging or cascade deletions.</li>
            <li><strong>Before Search:</strong> Executes before a query is performed, allowing you to filter or enhance the search criteria.</li>
            <li><strong>After Search:</strong> Executes after a query is performed, enabling modifications to the returned data or additional processing.</li>
        </ul>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ ...AppTheme.typography.heading03, fontWeight: 500 }}>
            Key Components
        </Typography>

        <ul className="list-unstyled mb-4">
            <li>
                <strong>Trigger Point:</strong> Specifies the CRUD operation or search phase (e.g., "Before Create", "After Search") where the hook will execute.
            </li>
            <li>
                <strong>Hook Logic:</strong> Custom code written to define the actions or modifications the hook performs. This can include calculations, validations, or external API calls.
            </li>
            <li>
                <strong>Data Context:</strong> The data being processed, such as the record being created, updated, or deleted. The hook has full access to modify this data.
            </li>
            <li>
                <strong>Associated Models:</strong> The specific models (e.g., "orders", "products") the hook applies to.
            </li>
        </ul>
    </div>
);

export default Hooks;