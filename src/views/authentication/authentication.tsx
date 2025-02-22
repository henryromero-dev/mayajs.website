import { Typography } from "@mui/material";
import React from "react";

const Authentication: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Register
        </Typography>

        <Typography variant="body1">
            <strong>Purpose:</strong>  Creates a new user account within the specified tenant, allowing them to log in and access the application's features. The user's information is stored according to the "user extension" object defined in the tenant's schema.
            <br /><strong>Why It's Important:</strong> User registration is the gateway to your application. It enables users to interact with your platform, personalize their experience, and access secure areas. User extensions allow you to customize the information collected during registration to suit your specific application needs.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ fontWeight: 500 }}>
            Login
        </Typography>

        <Typography variant="body1">
            <strong>Purpose:</strong> Authenticates a user's credentials (typically username/email and password) to grant them access to the application. The user's information is validated against the "user extension" object defined in the tenant's schema.
            <br /><strong>Why It's Important:</strong> Login is crucial for protecting sensitive data and ensuring that only authorized users can perform certain actions within your application.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ fontWeight: 500 }}>
            Logout
        </Typography>

        <Typography variant="body1">
            <strong>Purpose:</strong> Ends a user's session, revoking their access to the application and requiring them to log in again to regain access.
            <br /><strong>Why It's Important:</strong> Logout is essential for security, especially when using shared devices. It prevents unauthorized access to a user's account after they have finished using the application.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ fontWeight: 500 }}>
            Refresh Token
        </Typography>

        <Typography variant="body1">
            <strong>Purpose:</strong> Obtains a new access token (used for authorization) before the current one expires, allowing the user to continue using the application without interruption.
            <br /><strong>Why It's Important:</strong> Refresh tokens provide a seamless user experience by extending the validity of access tokens without requiring the user to re-enter their credentials frequently.
        </Typography>

        <Typography className="content--title mb-4 mt-5" variant="h4" sx={{ fontWeight: 500 }}>
            Reset Password
        </Typography>

        <Typography variant="body1">
            <strong>Purpose:</strong> Allows users to reset their forgotten or compromised passwords, regaining access to their accounts.
            <br /><strong>Why It's Important:</strong> Password reset functionality is critical for account recovery and user retention. It ensures that users can continue using the application even if they forget their login details.
        </Typography>
    </div>
);

export default Authentication;