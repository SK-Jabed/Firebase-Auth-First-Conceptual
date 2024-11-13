import React, { useContext } from 'react';
import { authContext } from '../Layout/MainLayout';

const About = () => {
    const { handleGoogleLogin, handleTwitterLogin, user } = useContext(authContext);

    return (
      <div>
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
        <div className="flex items-center justify-center mt-4 mb-3 text-2xl font-bold text-white">
          {user?.displayName}
        </div>
        <div className="flex items-center justify-center text-xl font-semibold text-gray-200">
          {user?.email}
        </div>
      </div>
    );
};

export default About;