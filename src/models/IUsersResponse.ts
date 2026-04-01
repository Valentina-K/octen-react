import type {IUser} from "./IUser.ts";

export interface IUsersResponse {
    users: IUser[];
    total: number;
    limit: number;
    skip: number;
}