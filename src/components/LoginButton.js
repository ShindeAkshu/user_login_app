import React from 'react';
import {userAuth0} from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = userAuth0();


return(
    <button onClick= {() =>loginWithRedirect() }>

    </button>
  )
}

export default LoginButton;