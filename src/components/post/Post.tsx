import type {IPost} from "../../models/post.ts";
import type {FC} from "react";

type PostProps = {
    post: IPost;
}
export const Post: FC<PostProps> = ({post}) => {
    const tags = post.tags.join(', ');
    return (
        <div className="w-1/3 rounded-2xl bg-blue-100 p-4">
            <h2 className="font-semibold text-lg text-center">{post.title}</h2>
            <div className="flex justify-around">
                <span><i>Likes:</i> {post.reactions.likes}</span><span><i>Dislikes:</i> {post.reactions.dislikes}</span><span><i>Views:</i> {post.views}</span>
            </div>
            <p>{post.body}</p>
            <div className="text-right"><b>Tags:</b> {tags}</div>
        </div>
    );
};