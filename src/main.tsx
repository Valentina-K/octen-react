import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";
//метод render задає <RouterProvider router={routes}/> з прописаним об'єктом routes
createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>);
