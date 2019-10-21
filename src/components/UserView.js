import React from "react";

const UserView = props => {
  return (
    <div>
      <p>User Name : {props.userData.username}</p>
      <p>Full Name : {props.userData.name}</p>
      <p>Email : {props.userData.email}</p>
      <p>Website : {props.userData.website}</p>
      <p>Company Details : {JSON.stringify(props.userData.company)}</p>
      <p onClick={props.showPostList}>Goto PostList</p>
    </div>
  );
};

export default UserView;
