import {useAppSelector} from "../../redux/store.ts";
import {selectUserPostsWithComments} from "../../redux/selectors/userSelectors.ts";

export const UserWithPosts = ({ userId }: { userId: number }) => {
    const postsWithComments =
        useAppSelector((state)=>
            selectUserPostsWithComments(state, userId))
    return (
        <div>
            {postsWithComments.map(post => (
                <div key={post.id}>
                    <h3 className={'text-2xl'}>{post.id}: {post.title}</h3>
                    <p className={'italic'}>{post.body}</p>
                    <p className={'ml-2.5 underline'}>Comments:</p>
                    <ul>
                        {post.comments.map(comment => (
                            <li className={'ml-7'} key={comment.id}>
                                <p>{comment.body}</p>
                                <a href="mailto:"><b>{comment.email}</b></a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};