import React from "react";

const PostView = props => {
  return (
    <div>
      <h2>PostView</h2>
      <p onClick={props.showPostList}>Goto PostList</p>
    </div>
  );
};

export default PostView;
