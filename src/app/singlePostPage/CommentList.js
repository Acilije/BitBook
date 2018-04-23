import React from 'react';
import CommentItem from './CommentItem';

const CommentList = (props) => {
    return (
        <div className="row">
            {props.comment.map((comment) => {
                return <CommentItem key={comment.id} singleComment={comment} />
            })}
        </div>
    )
}


export default CommentList;