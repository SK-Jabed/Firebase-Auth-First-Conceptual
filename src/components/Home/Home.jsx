import React, { useContext } from 'react';
import { authContext } from '../Layout/MainLayout';


const Home = () => {
    const contextValue = useContext(authContext);

    const { handleGoogleLogin, handleGithubLogin, handleTwitterLogin } = contextValue;

    return (
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-accent"
        >
          Login with Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-warning">
          Login with GitHub
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

export default Home;