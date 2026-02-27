import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {Comments} from "../components/comments/Comments.tsx";
import {Posts} from "../components/posts/Posts.tsx";
import {Products} from "../components/products/Products.tsx";
import {Users} from "../components/Users/Users.tsx";

export const routes = createBrowserRouter([{
    path: '/octen-react', element: <App />, children: [
        { path: 'users', element: <Users />},
        { path: 'comments', element: <Comments />},
        { path: 'posts', element: <Posts/>},
        { path: 'products', element: <Products/>}
    ]
}])