import React from "react";
import { Link } from "react-router-dom";

const TextPost = props => {
  const { post } = props;
  return ( 
    <div  className="row">
        <div className="card">
          <div className="card small valign-wrapper">
           <h5 className="center col m12"> {post.text} </h5>
            </div>
            <div className="card-content">
              <p className="left chip grey-text text-darken-4 "><Link to={`/TextPosts/${post.postId}`} className="grey-text text-darken-3"> {post.type} Post</Link></p>
              <p className="right chip grey-text text-darken-4"><Link to={`/TextPosts/${post.postId}`} className="grey-text text-darken-3"> {post.postComments} Comments</Link></p>
            <br/>
              </div>
        </div>
      </div>
      
  
  );
};

export default TextPost;
