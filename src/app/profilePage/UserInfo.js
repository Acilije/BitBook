import React from "react";
import EditProfile from "./EditProfile"

const UserInfo = props => {
  console.log(props)
  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
      <br/>
        <div className="card-panel ">
          <img className="circle" alt="profileImage" width="30%" src={props.profile.avatarUrl}/>
          {}
          <EditProfile/> 
          <h5>{props.profile.name}</h5>
          <p>{props.profile.about}</p>
          <div className="chip">
            <img src="" alt="" className="blue lighten-1 white-text" /> {props.profile.postsCount}{" "}posts
          </div>
              <div className="chip">
            
            <img src="" alt="" className="blue lighten-1 white-text" /> {props.profile.commentsCount}{" "}comments
             </div>

          <br />
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
