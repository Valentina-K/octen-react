
import UserComponent from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";


export const UsersComponent = () => {
    //отримуємо всіх юзерів
    const users = useFetch();
    //мемоїзуємо масив щоб запобігти ререндерингу дочірнього компоненту, оскільки масив - це об'єкт, а
    //при ререндерингу компоненту UsersComponent він отримує нове посилання, яке передається пропсами в дочірній компонент
    //і оскільки посилання нове, значить дочірній компонент ререндериться
    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    }, []);

    //мемоїзуємо фугкцію щоб запобігти ререндерингу дочірнього компоненту, оскільки функція - це об'єкт, а
    //при ререндерингу компоненту UsersComponent вона отримує нове посилання, яке передається пропсами в дочірній компонент
    //і оскільки посилання нове, значить дочірній компонент ререндериться
    const foo = useCallback(() => {
        console.log('test');
    }, []);


    return (
        <div>users component
            {
                users.map(value => <UserComponent item={value} foo={foo} arr={arr}/>)
            }
        </div>
    );
};
