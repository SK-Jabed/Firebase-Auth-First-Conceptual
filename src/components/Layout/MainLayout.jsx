import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import {
    createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
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

    const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log("ERROR:", error);
        })  
    }

    const handleLogOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log("ERROR", error);
        })
    }

    useEffect(() => {
        console.log("User state:", user);
    }, [user])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
           unsubscribe(); 
        } 
    }, [])

    const authData = {
      handleGoogleLogin,
      handleGithubLogin,
      handleTwitterLogin,
      user,
      setUser,
      handleLogOut,
      handleSignUp,
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