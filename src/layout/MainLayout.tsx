import {Link, Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <>
            <menu className={'bg-cyan-200 p-4 text-center w-full text-xl'}>
                <Link to={'users'} >Users</Link>
            </menu>
            <Outlet />
        </>
    );
};