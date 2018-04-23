import React from "react";


const FilterPost = props => {
  return (
    <div className="row">
      <br />
      <a className='dropdown-trigger btn blue lighten-1 col m2 offset-m9'  data-target='drop'><i className="material-icons right">arrow_drop_down</i>All posts</a>
      <br/>
      <ul id='drop' className='dropdown-content'>

        <li className="indigo darken-4 white-text valign-wrapper" onClick={props.allPosts} >
        <i className="material-icons left">more_horiz</i>
                  All posts</li>
                  <li className="divider" ></li>
        <li className="blue lighten-1 white-text valign-wrapper" onClick={() => props.filter("video")}> <i className="material-icons left">music_video</i>Videos</li>
        <li className="divider" ></li>
        <li className="blue lighten-1 white-text valign-wrapper" onClick={() => props.filter("image")}><i className="material-icons left">linked_camera</i>Images</li>
        <li className="divider" ></li>
        <li className="blue lighten-1 white-text valign-wrapper" onClick={() => props.filter("text")}><i className="material-icons left">message</i>Text</li>
      </ul>
    </div>

 
        
  );
};

export default FilterPost;
