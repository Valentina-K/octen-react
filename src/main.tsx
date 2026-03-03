import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersFromDummy} from "./pages/UsersFromDummy.tsx";
import {UsersFromJsonplaceholder} from "./pages/UsersFromJsonplaceholder.tsx";
import {PostsFromJsonplaceholder} from "./pages/PostsFromJsonplaceholder.tsx";
import {PostsFromDummy} from "./pages/PostsFromDummy.tsx";
import {CommentFromJsonplaceholder} from "./pages/CommentFromJsonplaceholder.tsx";
import {CommentFromDummy} from "./pages/CommentFromDummy.tsx";
import {HomePage} from "./pages/HomePage.tsx";

createRoot(document.getElementById('root')!).render(<BrowserRouter>
    <Routes>
        <Route path={'/octen-react'} element={<App/>}>
            <Route index={true} element={<HomePage />}/>
            <Route path={'users'}>
                <Route path={'jsonplaceholder'} element={<UsersFromJsonplaceholder/>}/>
                <Route path={'dummyjson'} element={<UsersFromDummy/>}/>
            </Route>
            <Route path={'posts'}>
                <Route path={'jsonplaceholder'} element={<PostsFromJsonplaceholder />}/>
                <Route path={'dummyjson'} element={<PostsFromDummy />}/>
            </Route>
            <Route path={'comments'}>
                <Route path={'jsonplaceholder'} element={<CommentFromJsonplaceholder />} />
                <Route path={'dummyjson'} element={<CommentFromDummy />} />
            </Route>
        </Route>
    </Routes>
</BrowserRouter>);
