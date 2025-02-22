import { Typography } from "@mui/material";
import React from "react";

const Properties: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Property Management
        </Typography>

        <Typography variant="body1" className="mb-3">
            In MayaJS, properties are the attributes or fields that define your objects (entities/tables). You can add, modify, or delete properties by modifying the object.
            <br /><br /> MayaJS supports a variety of property types to accommodate different kinds of data:
        </Typography>

        <ul className="list-unstyled">
            <li><Typography variant="body2"><code>float</code>: Decimal numbers (e.g., 3.14, -12.5)</Typography></li>
            <li><Typography variant="body2"><code>int</code>: Whole numbers (e.g., 1, 25, -100)</Typography></li>
            <li><Typography variant="body2"><code>image</code>: Stores image files</Typography></li>
            <li><Typography variant="body2"><code>file</code>: Stores general files (documents, PDFs, etc.)</Typography></li>
            <li><Typography variant="body2"><code>text</code>: Short strings of text</Typography></li>
            <li><Typography variant="body2"><code>mediumtext</code>: Longer strings of text</Typography></li>
            <li><Typography variant="body2"><code>longtext</code>: Very long strings of text</Typography></li>
            <li><Typography variant="body2"><code>date</code>: Dates (e.g., 2024-07-21)</Typography></li>
            <li><Typography variant="body2"><code>datetime</code>: Dates and times (e.g., 2024-07-21 15:08:00)</Typography></li>
            <li><Typography variant="body2"><code>boolean</code>: True/False values</Typography></li>
            <li><Typography variant="body2"><code>1n-</code> (One-to-Many Relationship): Links one object to many related objects (e.g., one customer with many orders)</Typography></li>
            <li><Typography variant="body2"><code>1n1</code> (One-to-One Relationship): Links one object to exactly one other object (e.g., one person with one passport)</Typography></li>
            <li><Typography variant="body2"><code>1n+</code> (Many-to-One Relationship): Links many objects to one related object (e.g., many orders belonging to one customer)</Typography></li>
            <li><Typography variant="body2"><code>password</code>: Securely stores hashed passwords</Typography></li>
        </ul>
    </div>
);

export default Properties;