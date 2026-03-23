import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {
//при переході на цю сторінку відбуваєтьяс запит по продукти
    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products)
        }).catch(reason => {
            console.log(reason);
            //якщо термін дії токену доступу сплинув, робиться запит на оновлення токену з подальшим запитом на продукти
            refresh()
                .then(() => loadAuthProducts())
                .then(value => console.log(value))
        })

    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};
