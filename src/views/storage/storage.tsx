import { Typography } from "@mui/material";
import React from "react";

const Storage: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Storage (File Upload)
        </Typography>

        <Typography variant="body1" className="mb-3">
            <strong>Purpose:</strong> The Storage module allows you to upload files to a server, manage file storage, and associate uploaded files with specific records or models in your data.  
            <br /><strong>Why It's Important:</strong> Many applications require handling files, such as documents, images, or other media. The Storage module simplifies file management by providing a straightforward way to upload and organize your files.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Key Components
        </Typography>

        <ul className="list-unstyled mb-4">
            <li>
                <strong>Schema:</strong> The top-level object defining the data model you're associating files with (optional).
            </li>
            <li>
                <strong>Model Names (e.g., "user", "product"):</strong> Properties within the schema object can correspond to models that the files are linked to.
            </li>
            <li>
                <strong>File Metadata:</strong> Additional information about the uploaded file, such as its name, type, or tags. This metadata can be included to help organize and retrieve files later.
            </li>
            <li>
                <strong>Upload Endpoint:</strong> Specify the endpoint or path where files will be uploaded. This should support secure and scalable file storage.
            </li>
            <li>
                <strong>File Associations:</strong> Optionally associate the uploaded file with a specific record or entity in your data by including identifiers like record IDs.
            </li>
        </ul>
    </div>
);

export default Storage;