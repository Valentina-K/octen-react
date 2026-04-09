import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: IComment,
}
export const Comment: FC<CommentPropsType> = ({comment}) => {
    return (
        <div className={'w-3/4 border rounded-2xl p-3.5 ml-auto mr-auto mt-2'}>
            <p className={'text-xl uppercase'}>{comment.name}</p>
            <div>{comment.body}</div>
            <a href={`mailto:${comment.email}`} className={'inline-block text-right'}>{comment.email}</a>
        </div>
    );
};