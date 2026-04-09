import {createApiThunk} from "./getData.ts";
import type {IComment} from "../../models/IComment.ts";

export const fetchComments =
    createApiThunk<IComment[]>('comments', 'fetchComments');