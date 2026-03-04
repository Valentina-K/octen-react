import {useEffect, useState} from "react";
import type {IUser} from "../../models/user.ts";
import {getData} from "../../services/services.ts";
import type {BaseResponseType} from "../../models/baseResponse.ts";
import {User} from "./User.tsx";

export const Users = () => {
    const [users,setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getData<BaseResponseType & {users: IUser[]}>('/users').then(({users}) => setUsers(users));
    },[])
    return (
        <div>{users.map(user => <User key={user.id} user={user} />)}</div>
    );
};