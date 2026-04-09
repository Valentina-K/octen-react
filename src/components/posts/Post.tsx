import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPost;
}
export const Post:FC<PostPropsType> = ({post}) => {
    return (
        <div className={'w-1/2 p-3.5 bg-blue-200 ml-auto mr-auto mt-2'}>
            <h3 className={'text-xl uppercase'}>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};