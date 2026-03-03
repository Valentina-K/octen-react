import type {IPost} from "../../models/post.ts";
import type {FC} from "react";

type PostProps = {
    post: IPost;
}
export const Post: FC<PostProps> = ({post}) => {
    return (
        <div className="p-2.5 rounded-2xl bg-blue-200 text-left w-1/4">
            <div className="flex justify-between">
                <p>post: {post.id}</p>
                <p>userId: {post.userId}</p>
            </div>
            <h2 className="font-semibold text-lg text-center">{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};