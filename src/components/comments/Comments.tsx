import type {IComment} from "../../models/IComment.ts";
import {getData} from "../../service/service.api.ts";
import {Comment} from "./Comment.tsx";
import { useQuery } from '@tanstack/react-query';

export const Comments = () => {
    const {data: comments, isLoading, isError} = useQuery({
        queryKey:['comments'],
        queryFn: () => getData<IComment[]>({ endpoint: '/comments' }),
        initialData: [],
        staleTime: Infinity
    })
    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error...</p>;
    return (
        <div>{comments.map((comment: IComment) => (
            <Comment key={comment.id} comment={comment}/>))}
        </div>
    );
};