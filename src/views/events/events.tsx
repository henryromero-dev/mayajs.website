import { Typography } from "@mui/material";
import React from "react";

const Events: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography  className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Events (Custom Client-Defined)
        </Typography>

        <Typography variant="body1" className="mb-3">
            <strong>Purpose:</strong> The Events module allows clients to define custom events using code, tailored to their unique needs.  
            <br /><strong>Why It's Important:</strong> Events can serve various purposes, from managing guest lists to automating job tasks. The flexibility to define events empowers clients to adapt the platform to their workflows.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Event Types
        </Typography>

        <ul className="list-unstyled list-inside mb-4">
            <li><strong>Guest:</strong> Events designed for managing attendees, such as RSVP or guest lists.</li>
            <li><strong>Private:</strong> Restricted events with limited access, only could be triggered with an access token.</li>
            <li><strong>System:</strong> Restricted events that requires access token and give access to system level operations.</li>
            <li><strong>Job:</strong> Events triggered by specific backend operations or workflows, such as scheduled tasks.</li>
        </ul>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Key Components
        </Typography>

        <ul className="list-unstyled mb-4">
            <li>
                <strong>Event Name:</strong> Custom logic written by the client to define how the event behaves. The code can include triggers, conditions, and actions.
            </li>
            <li>
                <strong>Event Type:</strong> One of the predefined types ("Guest", "Private", "System", "Job") that determines the context and visibility of the event.
            </li>
            <li>
                <strong>Parameters:</strong> Data or parameters passed to the event for execution, such as user details, timestamps, or configuration settings.
            </li>
        </ul>
    </div>
);

export default Events;