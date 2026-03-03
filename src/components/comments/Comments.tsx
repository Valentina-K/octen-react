import {useEffect, useState} from "react";
import type {IComment} from "../../models/comment.ts";
import {commentServices} from "../../services/services.ts";
import {Comment} from "../comment/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        const getComments = async (): Promise<IComment[]> => {
            return await commentServices.getComments();
        }
        getComments().then(comments => setComments(comments));
    }, [])
    return (
        <div className="flex flex-wrap gap-5 justify-center">{comments.map(
            (comment: IComment) => <Comment key={comment.id} comment={comment}/>
        )}
        </div>
    );
};