import type {IPostDummy} from "../../models/post.ts";
import type {FC} from "react";

type PostDummyProps = {
    post: IPostDummy;
}
export const PostDummy: FC<PostDummyProps> = ({post}) => {
    const tags = post.tags.join(', ');
    return (
        <div className="p-2.5 rounded-2xl bg-blue-200 text-left w-1/4">
            <div className="flex justify-between">
                <p>post: {post.id}</p>
                <p>userId: {post.userId}</p>
            </div>
            <h2 className="font-semibold text-lg text-center">{post.title}</h2>
            <p>{post.body}</p>
            <div className="flex justify-between">
                <p>Likes: <b>{post.reactions.likes}</b></p>
                <p>Dislikes: <b>{post.reactions.dislikes}</b></p>
                <p>Views: <b>{post.views}</b></p>
            </div>
            <p>Tags: <i>{tags}</i></p>
        </div>
    );
};