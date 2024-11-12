import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.config';

const Home = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log("ERROR:", error);
        })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log("ERROR:", error);
        })
    }

    const handleTwitterLogin = () => {
        signInWithPopup(auth, twitterProvider)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log("ERROR:", error);
        })
    }

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