/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import DashboardPage from '../pages/dashboard';



function AppRoute() {
  
  const location = useLocation();
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

    return (
        <Fragment>
             <Routes>
                <Route  path="/" element={<DashboardPage />} />

               
            </Routes>
        </Fragment>
    )
}

export default AppRoute
