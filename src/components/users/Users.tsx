import {useQuery} from "@tanstack/react-query";
import type {IUser} from "../../models/IUser.ts";
import {User} from "./User.tsx";
import {getData} from "../../service/service.api.ts";

export const Users = () => {
    const {data: users, isLoading, isError} = useQuery({
        queryKey: ["users"],
        queryFn: ()=>getData<IUser[]>({endpoint: "/users"}),
        initialData: [],
        staleTime: Infinity
    });
    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error...</p>;
    return (
        <>{users.map((user: IUser) => (<User key={user.id} user={user} />))}</>
    );
};