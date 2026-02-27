import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <nav className="flex items-center justify-evenly w-full p-4 bg-lime-300">
            <Link to={'users'}>Users</Link>
            <Link to={'posts'}>Posts</Link>
            <Link to={'comments'}>Comments</Link>
            <Link to={'products'}>Products</Link>
        </nav>
    );
};