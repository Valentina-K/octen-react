
import type {IPost} from "../../models/post.ts";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/services.ts";
import {Post} from "../post/Post.tsx";



export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(posts => setPosts(posts));
    })
    return (
        <div>{posts.map(post=>(<Post key={post.id} post={post} />))}</div>
    );
};
