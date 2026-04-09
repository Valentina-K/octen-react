import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUser;
}
export const User: FC<UserPropsType> = ({user}: UserPropsType) => {
    return (
        <div className={'bg-amber-950 text-white p-3.5 w-1/4 mt-2'}>
            <p>{user.name}</p>
            <a href="mailto:">{user.email}</a>
        </div>
    );
};