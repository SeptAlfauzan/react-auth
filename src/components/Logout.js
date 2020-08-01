import React from 'react';
import { GoogleLogout } from 'react-google-login';
require('dotenv').config();

const clientId = process.env.REACT_APP_CLIENT_ID+'.apps.googleusercontent.com';
console.log(clientId);
const Logout = () => {
    const onSuccess = () => {
        alert(`Logout success, current`);
    }

    return ( 
        <div>
            <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={onSuccess}
            buttonText='Logout'
            />
        </div>
     );
}
 
export default Logout;