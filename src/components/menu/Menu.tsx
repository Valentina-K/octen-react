import {Link} from "react-router";

export const Menu = () => {
    return (
        <nav className="bg-cyan-200 p-2.5 mb-10">
            <ul className="flex justify-evenly text-2xl text-blue-950">
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
            </ul>
        </nav>
    );
};