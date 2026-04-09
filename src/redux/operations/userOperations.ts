import {createApiThunk} from "./getData.ts";
import type {IUser} from "../../models/IUser.ts";

export const fetchUsers =
    createApiThunk<IUser[]>('users', 'fetchUsers');


