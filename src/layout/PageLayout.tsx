import {Outlet} from "react-router";
import {Pagination} from "../components/pagination/Pagination.tsx";

export const PageLayout = () => {
    return (
        <>
            <Outlet />
            <Pagination />
        </>
    );
};