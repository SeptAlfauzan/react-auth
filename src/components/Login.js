import React from 'react';
import { GoogleLogin } from 'react-google-login';


const clientId = 'BLABLA';

const Login = () => {
    const onSuccess = (res) => {
        console.log(`login success, current user ${res.profileObj}`);
    }

    const onFailure = (res) => {
        console.log(`Login failure ${res}`);
    }

    return ( 
        <div>
            <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px'}}
            isSignedIn={true}
            />
        </div>
     );
}
 
export default Login;