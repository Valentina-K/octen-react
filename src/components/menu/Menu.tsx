import {Link} from "react-router";

export const Menu = () => {
    return (
        <menu className="bg-blue-950 text-white p-5 fixed inset-x-0 z-50 text-2xl">
            <ul>
                <li><Link to={'/cars'}>Cars</Link></li>
                <li><Link to={'/cars/create'}>Create car</Link></li>
            </ul>
        </menu>
    );
};