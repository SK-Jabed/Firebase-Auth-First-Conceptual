import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
export const authContext = createContext();

const MainLayout = () => {
    return (
        <div>
            <authContext.Provider value={{name: "SKJ"}}>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;