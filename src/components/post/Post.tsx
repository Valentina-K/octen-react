import type {IPost} from "../../models/post.ts";
import type {FC} from "react";

type PostProps = {
    post: IPost;
}
export const Post: FC<PostProps> = ({post}) => {
    return (
        <>{post.body}</>
    );
};