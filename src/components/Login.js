import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {refreshTokenSetup} from '../utils/refreshToken.js'
require('dotenv').config();

const clientId = process.env.REACT_APP_CLIENT_ID+'.apps.googleusercontent.com';
console.log(clientId);
const Login = () => {
    const onSuccess = (res) => {
        console.log(`login success, current user ${res.profileObj}`);

        refreshTokenSetup(res);
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