import React from 'react';
import { GoogleLogout } from 'react-google-login';


const clientId = 'BLABLA';

const Logout = () => {
    const onSuccess = (res) => {
        console.log(`Logout success, current user ${res.profileObj}`);
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