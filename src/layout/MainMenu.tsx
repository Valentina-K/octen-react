import {Link} from "react-router";

export const MainMenu = () => {
    return (
        <>
            <nav className="text-2xl font-bold text-white bg-blue-950 p-5">
                <ul className="flex justify-evenly">
                    <li><Link to={'users'}>Users</Link></li>
                    <li><Link to={'posts'}>Posts</Link></li>
                    <li><Link to={'comments'}>Comments</Link></li>
                    <li><Link to={'complex'}>Complex</Link></li>
                </ul>
            </nav>
        </>
    );
};