import { createBrowserRouter } from "react-router-dom";
import RootPage from "../Pages/RootPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import HomePage from "../Pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage/>,
        children:[
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/register',
                element: <RegisterPage/>
            }
        ]
    }
])

export default router;