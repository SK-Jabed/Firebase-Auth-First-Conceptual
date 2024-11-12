import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import auth from "../../firebase.config";

export const authContext = createContext();

const MainLayout = () => {
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

    const authData = {
      handleGoogleLogin,
      handleGithubLogin,
      handleTwitterLogin,
    };

    return (
        <div>
            <authContext.Provider value={authData}>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;