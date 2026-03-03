import type {ICommentDummy} from "../../models/comment.ts";
import type {FC} from "react";

type CommentDummyProps = {
    comment: ICommentDummy;
}
export const CommentDummy: FC<CommentDummyProps> = ({comment}) => {
    return (
        <div className="p-2.5 rounded-2xl bg-blue-200 text-left w-1/3">
            <div className="flex justify-between">
                <p>Post: <i>{comment.postId}</i></p>
                <p>Likes: <b>{comment.likes}</b></p>
            </div>
            <p>{comment.body}</p>
            <div className="flex justify-between">
                <p>Username: <i>{comment.user.username}</i></p>
                <p>{comment.user.fullName}</p>
            </div>
        </div>
    );
};

/*"body": "This is some awesome thinking!",
"postId": 242,
"likes": 3,
"user": {
"id": 105,
"username": "emmac",
"fullName": "Emma Wilson"
}*/