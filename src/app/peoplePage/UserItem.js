import React from "react";
import { Link } from "react-router-dom";

const UserItem = props => {
  console.log(props)
  return (
    <Link to={`/peoplePage/${props.singleUser.id}`}>
      <div className="collection">
        <div className="collection-item avatar">
          <img src={props.singleUser.avatarUrl} alt="" width="10%" className="circle" />
          <p className="title left">{props.singleUser.name}</p>
          <p>{props.singleUser.aboutShort}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
