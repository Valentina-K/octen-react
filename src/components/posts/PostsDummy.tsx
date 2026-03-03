import {useEffect, useState} from "react";
import type {IPostDummy} from "../../models/post.ts";
import {postServices} from "../../services/services.ts";
import {PostDummy} from "../post/PostDummy.tsx";

export const PostsDummy = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);
    useEffect(() => {
        const getPosts = async() => {
            return await postServices.getPostsDummy();
        }
        getPosts().then(posts => setPosts(posts));
    },[])
    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {posts.map(post=><PostDummy key={post.id} post={post} />)}
        </div>
    );
};