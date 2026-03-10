import {useSearchParams} from "react-router";
import {LIMIT} from "../../constants/urlParams.ts";

export const Pagination = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get('page') || '1');
    const total = Number(searchParams.get('total') || '1');
    return (
        <div className={'w-full fixed flex bottom-0 gap-4 justify-center pt-10 pb-10 bg-blue-100 opacity-70'}>
            <button onClick={() => {
                setSearchParams({page: (--currentPage).toString()})
            }} disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">Prev
            </button>
            <button onClick={() => setSearchParams({page: (++currentPage).toString()})}
                    disabled={currentPage === Math.round(total / LIMIT)}
                    className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">Next
            </button>
        </div>
    );
};