
import {LeftBranchA} from "./LeftBranchA.tsx";
import {useMemo} from "react";

export const LeftBranch = () => {
    //огортаємо цикл з багатьма ітераціями у useMemo, що запобігає ререндерингу дочірнього компоненту при ререндерингу LeftBranch
    const memox = useMemo(() => {
        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }
        return null;
    }, []);
    return (
        <div>LeftBranch

            <LeftBranchA/>
        </div>
    );
};
