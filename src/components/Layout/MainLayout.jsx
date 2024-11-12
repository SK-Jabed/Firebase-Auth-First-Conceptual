import React, { createContext, useEffect, useState } from 'react';
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
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            console.log("ERROR:", error);
        })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            console.log("ERROR:", error);
        })
    }

    const handleTwitterLogin = () => {
        signInWithPopup(auth, twitterProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            console.log("ERROR:", error);
        })
    }

    useEffect(() => {
        console.log("User state:", user);
    }, [user])

    const authData = {
      handleGoogleLogin,
      handleGithubLogin,
      handleTwitterLogin,
      user, 
      setUser
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