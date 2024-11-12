import React, { useContext } from 'react';
import { authContext } from '../Layout/MainLayout';

const About = () => {
    const { handleGoogleLogin, handleTwitterLogin } = useContext(authContext);

    return (
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-accent"
        >
          Login with Google
        </button>
        <button
          onClick={handleTwitterLogin}
          className="btn btn-outline btn-primary"
        >
          Login with Twitter
        </button>
      </div>
    );
};

export default About;