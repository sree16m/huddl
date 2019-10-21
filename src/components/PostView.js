import React from "react";
import Post from "./Post";
import User from "./User";
import Comments from "./PostComments";

const PostView = props => {
  return (
    <div>
      <Post title={props.postData.postTitle} />
      <User username={props.postData.userName} />
      <Comments comments={props.postComments} />
      <p onClick={props.showPostList}>Goto PostList</p>
    </div>
  );
};

export default PostView;
