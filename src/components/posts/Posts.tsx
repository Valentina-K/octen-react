import {useQuery} from "@tanstack/react-query";
import type {IPost} from "../../models/IPost.ts";
import {Post} from "./Post.tsx";
import {getData} from "../../service/service.api.ts";


export const Posts = () => {
    const {data: posts, isLoading, isError} = useQuery({
        queryKey: ["posts"],
        queryFn: ()=>getData<IPost[]>({endpoint: '/posts'}),
        initialData: [],
        staleTime: Infinity
    })
    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error...</p>;
    return (
        <>{posts.map((post: IPost) =>(<Post key={post.id} post={post}/>))}</>
    );
};