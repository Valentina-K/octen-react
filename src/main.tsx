import {createRoot} from 'react-dom/client'
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Users} from "./components/Users/Users.tsx";
import {Posts} from "./components/posts/Posts.tsx";
import {Comments} from "./components/comments/Comments.tsx";
import {Products} from "./components/products/Products.tsx";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/octen-react'} element={<App/>}>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'posts'} element={<Posts/>}/>
                <Route path={'comments'} element={<Comments/>}/>
                <Route path={'products'} element={<Products/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
