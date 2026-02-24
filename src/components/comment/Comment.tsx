import like from '../../assets/like.png';
import type {IComment} from "../../models/comment.ts";
import type {FC} from "react";

type CommentProps = {
    comment: IComment
}
export const Comment: FC<CommentProps> = ({comment: {user, likes, body, postId}}) => {
    return (
        <div className="bg-lime-300 mb-5 p-3.5 rounded-3xl hover:shadow-inner shadow-lime-950 cursor-pointer transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between">
                <p className="font-semibold text-xl">Post: {postId}</p>
                <div className="flex gap-2 items-center">
                    <img src={like} alt="like" className="w-8"/>
                    <span className="font-semibold text-xl">{likes}</span>
                </div>
            </div>
            <p className="text-left text-xl">{body}</p>
            <p className="text-right italic text-xl">{user.fullName}</p>
        </div>
    );
};
