import type {IComment} from "../../models/comments.ts";
import type {FC} from "react";

type CommentProps = {
    comment: IComment
}
export const Comment: FC<CommentProps> = ({comment: {name, email, body}}) => {
    return (
        <div className="bg-lime-300 mb-5 p-3.5 rounded-3xl hover:shadow-inner shadow-lime-950 cursor-pointer transition-shadow duration-300 ease-in-out">
            <h3 className="text-emerald-950 font-semibold text-3xl capitalize">{name}</h3>
            <h4 className="text-left text-2xl underline">email: <a href={`mailto:${email}`}>{email}</a></h4>
            <p className="text-left text-xl">{body}</p>
        </div>
    );
};