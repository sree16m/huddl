import React from "react";

const UserView = props => {
  return (
    <div>
      <h2>UserView</h2>
      <p onClick={props.showPostList}>Goto PostList</p>
    </div>
  );
};

export default UserView;
