import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {fetchUsers} from "../../redux/operations/userOperations.ts";
import type {IUser} from "../../models/IUser.ts";
import {selectUsers} from "../../redux/selectors/userSelectors.ts";
import {User} from "./User.tsx";

export const Users = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    useEffect(() => {
        dispatch(fetchUsers());
    },[])
    return (
        <>{users.map((user: IUser) => (<User key={user.id} user={user} />))}</>
    );
};