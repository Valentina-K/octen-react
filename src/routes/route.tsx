import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PageLayout} from "../layout/PageLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '/octen-react', element: <MainLayout/>, children: [
            {
                path: '', element: <PageLayout />, children: [{
                    path: 'users', element: <UsersPage />
                }]
            }
        ]
    }
])