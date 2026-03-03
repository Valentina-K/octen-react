import {useEffect, useState} from "react";
import type {IPost} from "../../models/post.ts";
import {postServices} from "../../services/services.ts";
import {Post} from "../post/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const getPosts = async () => {
            return postServices.getPosts();
        }
        getPosts().then(posts => setPosts(posts));
    }, [])
    return (
        <div className="flex flex-wrap gap-5 justify-center">{posts.map(post =>
            <Post key={post.id} post={post}/>)}
        </div>
    );
};