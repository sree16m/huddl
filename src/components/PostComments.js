import React from "react";

const Comments = props => {
  return (
    <div>
      <p>Subject : {props.comments.name}</p>
      <p>Body : {props.comments.body}</p>
      <p>Email : {props.comments.email}</p>
    </div>
  );
};

export default Comments;
