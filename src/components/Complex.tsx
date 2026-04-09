import {useQuery, useQueryClient} from "@tanstack/react-query";
import type {IUser} from "../models/IUser.ts";
import {getData} from "../service/service.api.ts";
import type {IPost} from "../models/IPost.ts";
import type {IComment} from "../models/IComment.ts";

export const Complex = () => {
    const queryClient = useQueryClient();
    const cachedUsers = queryClient.getQueryData<IUser[]>(['users']);
    const cachedPosts = queryClient.getQueryData<IPost[]>(['posts']);
    const cachedComments = queryClient.getQueryData<IComment[]>(['comments']);

    const { data: users } = useQuery<IUser[]>({
        queryKey: ['users'],
        queryFn: () => getData<IUser[]>({ endpoint: '/users' }),
        enabled: !cachedUsers, // запрос делаем только если кеша нет
    });

    const {data: posts} = useQuery<IPost[]>({
        queryKey: ['posts'],
        queryFn: () => getData<IPost[]>({ endpoint: '/posts' }),
        enabled: !cachedPosts,
    })

    const {data: comments} = useQuery<IComment[]>({
        queryKey: ['comments'],
        queryFn: () => getData<IComment[]>({ endpoint: '/comments' }),
        enabled: !cachedComments,
    })

    const finalUsers = users ?? cachedUsers;
    const finalPosts = posts ?? cachedPosts;
    const finalComments = comments ?? cachedComments;
    return (
        <div>
            {finalUsers?.map(user => (
                <div className={'w-3/4 bg-gray-300 rounded-2xl p-3.5 ml-auto mr-auto mt-2 text-left'} key={user.id}>
                    <h2 className={'text-2xl uppercase'}>{user.name}</h2>
                    <p className={'text-xl underline'}>Posts: </p>
                    {finalPosts?.filter((post: IPost) => post.userId === user.id).map((post: IPost) => (
                        <div key={post.id}>
                            <h3 className={'text-2xl'}>{post.id}: {post.title}</h3>
                            <p className={'italic'}>{post.body}</p>
                            <p className={'ml-2.5 underline'}>Comments:</p>
                            <ul>
                                {
                                    finalComments?.filter((comment: IComment) => (comment.postId === post.id)).map((comment: IComment) => (
                                        <li className={'ml-7'} key={comment.id}>
                                            <p>{comment.body}</p>
                                            <a href={`mailto:${comment.email}`}><b>{comment.email}</b></a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};