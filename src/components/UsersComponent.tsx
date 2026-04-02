
import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";


export const UsersComponent = () => {
    //отримуємо всіх юзерів
    const [users, setUsers] = useState([]);
    console.log(users);
    //мемоїзуємо фугкцію щоб запобігти ререндерингу дочірнього компоненту, оскільки функція - це об'єкт, а
    //при ререндерингу компоненту UsersComponent вона отримує нове посилання, яке передається пропсами в дочірній компонент
    //і оскільки посилання нове, значить дочірній компонент ререндериться
    const foo = useCallback(() => {
        console.log('test');
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        return () => {
            console.log('unsubscribe');
        }

    }, []);


    return (
        <div>users component
            <UserComponent foo={foo}/>
        </div>
    );
};
