import {useEffect, useState} from "react";
import type {IPost} from "../../models/post.ts";
import {getData} from "../../services/services.ts";
import type {BaseResponseType} from "../../models/baseResponse.ts";
import {Post} from "./Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getData<BaseResponseType & {posts: IPost[]}>('/posts').then(({posts}) => setPosts(posts));
    },[])
    return (
        <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
    );
};