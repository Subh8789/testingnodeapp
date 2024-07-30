import React from "react";
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import Home from "../pages/Home";
import Search_Page from "../pages/Search-page";
import PDP_page from "../pages/PDP_page";
import SignInPage from "../pages/SignInPage";
import MyAccountPage from "../pages/MyAccountPage";
import Layout from "../Layout/Layout";
export default function routing() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {path: '/', element: <Home/>},
                {
                    path: '/login', 
                    element: <SignInPage/>
                },
                {
                    path: './my-account',
                    element: <MyAccountPage/>
                },
                {
                    path: '/search',
                    element: <Search_Page/>
                },
                {
                    path: '/search/:id',
                    element:<PDP_page/>
                }]

        }
     /*   {
            path: '/login', 
            element: <SignInPage/>
        },
        {
            path: './my-account',
            element: <MyAccountPage/>
        },
        {
            path: '/search',
            element: <Search_Page/>
        },
        {
            path: '/search/:id',
            element:<PDP_page/>
        },
        */

    ])
    return router;

}