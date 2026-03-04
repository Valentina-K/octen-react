import type {IUser} from "../../models/user.ts";
import type {FC} from "react";

type UserProps = {
    user: IUser;
}
export const User: FC<UserProps> = ({user}) => {
    return (
        <div>{user.username}</div>
    );
};