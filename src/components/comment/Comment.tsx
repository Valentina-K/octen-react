import type {IComment} from "../../models/comment.ts";
import type {FC} from "react";

type CommentProps = {
    comment: IComment;
}
export const Comment: FC<CommentProps> = ({comment}) => {
    return (
        <div className="p-2.5 rounded-2xl bg-blue-200 text-left w-1/4">
            <p>postId: <i>{comment.postId}</i></p>
            <p>id: <i>{comment.id}</i></p>
            <h3><b>{comment.name}</b></h3>
            <p>{comment.body}</p>
            <p><i>author:</i> {comment.email}</p>
        </div>
    );
};