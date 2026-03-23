import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([
    {
        //В базовому url рендериться <MainLayout/>
        path: '/', element: <MainLayout/>, children: [
            //В <MainLayout/> зразу рендериться <HomePage/>, index: true означає рутовий шлях для батьківського url
            {index: true, element: <HomePage/>},
            //шлях до <LoginPage/>
            {path: 'login', element: <LoginPage/>},
            //шлях до <AuthResourcesPage/>
            {path: '/auth/resources', element: <AuthResourcesPage/>},
        ]
    }
]);
