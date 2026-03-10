import {useEffect, useState} from "react";
import type {IUser} from "../../models/user.ts";
import {getData} from "../../services/services.ts";
import type {BaseResponseType} from "../../models/baseResponse.ts";
import {User} from "./User.tsx";
import {useSearchParams} from "react-router";

export const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        let page = searchParams.get('page') || '1';
        getData<BaseResponseType & { users: IUser[] }>('/users', page)
            .then(({users, total}) => {
                setUsers(users);
                setSearchParams({total: total.toString(), page: page});
            });
    }, [searchParams]);
    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};