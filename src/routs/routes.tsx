import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostPage} from "../pages/PostPage.tsx";
import {CommentPage} from "../pages/CommentPage.tsx";
import {ComplexPage} from "../pages/ComplexPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/octen-react", element: <App />, children: [
            {
                path: "users", element: <UserPage />
            },
            {path: "posts", element: <PostPage />},
            {path: "comments", element: <CommentPage />},
            {path: "complex", element: <ComplexPage />}
        ]
    }
])