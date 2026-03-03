import {useEffect, useState} from "react";
import type {ICommentDummy} from "../../models/comment.ts";
import {commentServices} from "../../services/services.ts";
import {CommentDummy} from "../comment/CommentDummy.tsx";

export const CommentsDummy = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([]);
    useEffect(() => {
        const getComments = async (): Promise<ICommentDummy[]> => {
            return await commentServices.getCommentsDummy();
        }
        getComments().then(comments=>setComments(comments));
    },[])
    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {comments.map((comment: ICommentDummy) => (<CommentDummy key={comment.id} comment={comment} />))}
        </div>
    );
};