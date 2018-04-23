import React from "react";
import {Link} from "react-router-dom"

const ImagePost = props => {
 
  
  const { post } = props;

  return (
    
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card">
            <img alt="" width="90%" src={post.imageUrl} />
          </div>
          <div className="card-content">
            <p className="left chip"><Link to = {`/ImagePosts/${post.postId}`} className="grey-text text-darken-3">{post.type} Post</Link></p>
            <p className="right chip"><Link to = {`/ImagePosts/${post.postId}`} className="grey-text text-darken-3">{post.postComments} Comments</Link></p>
            <br/> 
          </div>
        </div>
      </div>
    </div>
      
    
  );
};

export default ImagePost;
