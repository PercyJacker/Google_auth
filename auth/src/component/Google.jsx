import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";




const Google = () => {
  const handleSuccess = (credentialResponse) => {
    console.log('Google sign-in success', credentialResponse);
    const decode = jwtDecode(credentialResponse?.credential)
  console.log(decode);
  };

  
  const handleError = () => {
    console.log('Google sign-in error');
  };

  return (
    <div>
      Google
      <div>
        {/* Replace CLIENT_ID with your actual Google OAuth client ID */}
        <GoogleOAuthProvider clientId="747189765112-9deql7stvlsnsvn2rlkf8j1fai623a0e.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Google;
