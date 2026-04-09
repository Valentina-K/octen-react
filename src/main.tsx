import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'
import {RouterProvider} from "react-router";
import {routes} from "./routs/routes.tsx";
import {store} from "./redux/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>);
