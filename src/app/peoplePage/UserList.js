import React from "react";
import UserItem from "./UserItem";

const UserList = props => {
  return (
    <div className="col s12  m8 offset-m2">
      {props.people.map(user => {
        return (
          <div key={user.id}>
            <UserItem singleUser={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
