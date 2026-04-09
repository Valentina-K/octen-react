import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {selectUsers} from "../redux/selectors/userSelectors.ts";
import {useEffect} from "react";
import {selectCommentsExist} from "../redux/selectors/commentSelectors.ts";
import {fetchComments} from "../redux/operations/commentOperations.ts";
import {selectPosts} from "../redux/selectors/postSelectors.ts";
import {fetchPosts} from "../redux/operations/postOperations.ts";
import {fetchUsers} from "../redux/operations/userOperations.ts";
import {UserWithPosts} from "./users/UserWithPosts.tsx";

export const Complex = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    const commentExist = useAppSelector(selectCommentsExist);
    const postExist = useAppSelector(selectPosts);

    useEffect(() => {
        if (!users.length) dispatch(fetchUsers());
        if (!commentExist) dispatch(fetchComments());
        if (!postExist) dispatch(fetchPosts());
    }, []);

    return (
        <div>
            {users.map(user => (
                <div className={'w-3/4 bg-gray-300 rounded-2xl p-3.5 ml-auto mr-auto mt-2 text-left'} key={user.id}>
                    <h2 className={'text-2xl uppercase'}>{user.name}</h2>
                    <p className={'text-xl underline'}>Posts: </p>
                    <UserWithPosts userId={user.id} />
                </div>
            ))}
        </div>
    );
};