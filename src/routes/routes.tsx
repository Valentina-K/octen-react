import {CarsPage} from "../pages/CarsPage.tsx";
import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {CreateCarPage} from "../pages/CreateCarPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarPage/>}
        ]
    }]
    ,
    {
        basename: "/octen-react",
    });