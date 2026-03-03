import {Link} from "react-router-dom";
import {useState} from "react";
import './styles.css';

export const Menu = () => {
    const [open, setOpen] = useState<string | null>(null);
    return (
        <nav className="bg-blue-200 p-5 mb-10">
            <ul className="flex items-center justify-between text-lg capitalize">
                <li>
                    <Link to="">Home</Link>
                </li>
                <li className={open === 'users' ? "popup open" : "popup"}>
                    <button className="cursor-pointer" onClick={() => setOpen(prev=> prev === 'users' ? null : 'users')}>Users</button>
                    <ul className="popup-body">
                        <li><Link to={'users/jsonplaceholder'}>users from jsonplaceholder</Link></li>
                        <li><Link to={'users/dummyjson'}>users from dummyjson</Link></li>
                    </ul>
                </li>
                <li className={open === 'posts' ? "popup open" : "popup"}>
                    <button className="cursor-pointer" onClick={() => setOpen(prev=>prev === 'posts' ? null : 'posts')}>Posts</button>
                    <ul className="popup-body">
                        <li><Link to={'posts/jsonplaceholder'}>posts from jsonplaceholder</Link></li>
                        <li><Link to={'posts/dummyjson'}>posts from dummyjson</Link></li>
                    </ul>
                </li>
                <li className={open === 'comments' ? "popup open" : "popup"}>
                    <button className="cursor-pointer" onClick={() => setOpen(prev => prev === 'comments' ? null : 'comments')}>Comments</button>
                    <ul className="popup-body">
                        <li><Link to={'comments/jsonplaceholder'}>comments from jsonplaceholder</Link></li>
                        <li><Link to={'comments/dummyjson'}>comments from dummyjson</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};