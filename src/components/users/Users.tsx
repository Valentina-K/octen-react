import {useEffect, useState} from "react";
import type {IUser} from "../../models/user.ts";
import {userServices} from "../../services/services.ts";
import {User} from "../user/User.tsx";

export const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const getUsers = async(): Promise<IUser[]> =>{
            return await userServices.getUsers();
        }
        getUsers().then(users => setUsers(users));
    },[])
    return (
        <div className="flex flex-wrap gap-5 justify-center">{users.map((user: IUser) => (<User key={user.id} user={user} />))}</div>
    );
};