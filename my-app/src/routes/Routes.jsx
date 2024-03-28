import React from "react";
import Login from "../pages/login/login";
import Registration from "../pages/register/registration";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const Routes = () => {
   // const { token } = useAuth();
    const protectedRoutes = [{ path: '/contacts', element: <>Contacts</> }];
    //незахищені роути(доступні для всіх)
    const routes = [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Registration /> },
    ];
    const router = createBrowserRouter ([
        ...protectedRoutes,
        ...routes,
      ]);
    
      return <RouterProvider router={router} />;
    };
    
    export default Routes;