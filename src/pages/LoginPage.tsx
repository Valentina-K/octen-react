import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
    //при переході на сторінку відбувається процес логінації (відпрацьовує useEffect з пустим масивом залежностей)
    //користувач буде залогінений на 1 хвилину
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);

    return (
        <>
            login Page
        </>
    );
};
