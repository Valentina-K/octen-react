import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {fetchPosts} from "../../redux/operations/postOperations.ts";
import {selectPosts} from "../../redux/selectors/postSelectors.ts";
import type {IPost} from "../../models/IPost.ts";
import {Post} from "./Post.tsx";


export const Posts = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectPosts);
    useEffect(() => {
        dispatch(fetchPosts());
    },[])
    return (
        <>{posts.map((post: IPost) =>(<Post key={post.id} post={post}/>))}</>
    );
};