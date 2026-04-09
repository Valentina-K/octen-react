import {selectComments} from "../../redux/selectors/commentSelectors.ts";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import type {IComment} from "../../models/IComment.ts";
import {Comment} from "./Comment";
import {fetchComments} from "../../redux/operations/commentOperations.ts";
import {useEffect} from "react";

export const Comments = () => {
    const dispatch = useAppDispatch();
    //const commentExist = useAppSelector(selectCommentsExist);
    //if (!commentExist) dispatch(fetchComments());
    const comments = useAppSelector(selectComments);
    useEffect(()=>{
        dispatch(fetchComments());
    },[])
    return (
        <div>{comments.map((comment: IComment) => (
            <Comment key={comment.id} comment={comment}/>))}
        </div>
    );
};