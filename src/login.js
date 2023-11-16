// Login.js

import React, { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
;

  const handleLogin = () => {
    // Add your login logic here
    
    console.log(`Logging in with ${username} `);
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
       Login with your metamask account 
        
      </label>
      <br />
      
       
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
