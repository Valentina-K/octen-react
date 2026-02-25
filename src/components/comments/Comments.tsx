import {type FC, useEffect, useState} from "react";
import type {IComment} from "../../models/comment.ts";
import {getComments} from "../../services/services.ts";
import {Comment} from "../comment/Comment.tsx";

export const Comments: FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments().then(value => setComments(value));
    })
    return (
        <div className="ml-auto mr-auto w-3/4">
            {comments.map(comment => (<Comment key={comment.id} comment={comment}/>))}
        </div>
    );
};