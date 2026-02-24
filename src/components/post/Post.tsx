import type {FC} from "react";
import avatar from '../../assets/avatar.png';
import type {IPost} from "../../models/post.ts";

type PostProps = {
    post: IPost;
}

export const Post: FC<PostProps> = ({post: {id, title, body, userId}}) => {
    return (
        <div className="border-0 bg-blue-100 rounded-3xl w-1/2 mb-5 p-3.5 hover:hover:shadow-inner shadow-blue-950 cursor-pointer">
            <div className="flex justify-between items-center mb-2">
                <span className="rounded-4xl border border-amber-950 bg-amber-200 w-10 h-10 flex items-center justify-center text-xl">{id}</span>
                <div className="flex items-center justify-between">
                    <span className="text-xl">User: {userId}</span>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
            <h3 className="text-2xl capitalize font-semibold w-1/2 ml-auto mr-auto">{title}</h3>
            <p className="text-xl text-left">{body}</p>
        </div>
    );
};
