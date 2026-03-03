import {useEffect, useState} from "react";
import type {IUserDummy} from "../../models/user.ts";
import {userServices} from "../../services/services.ts";
import {UserDummy} from "../user/UserDummy.tsx";

export const UsersDummy = () => {
    const [users, setUsers] = useState<IUserDummy[]>([]);
    useEffect(() => {
        const getUsers = async(): Promise<IUserDummy[]> =>{
            return await userServices.getUsersDummy();
        }
        getUsers().then(users => setUsers(users));
    },[])
    return (
        <div className="flex flex-wrap gap-5 justify-center">{users.map((user: IUserDummy) => (<UserDummy key={user.id} user={user} />))}</div>
    );
};