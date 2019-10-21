import React from "react";
import Post from "./Post";
import User from "./User";

const PostList = props => {
  let userObj = {};

  return (
    <div>
      {props.posts.map((post, i) => {
        if (props.users.length) {
          userObj = props.users.find(user => post.userId === user.id);
        }
        return (
          <article
            key={i}
            onClick={props.showPost}
            className="bt bb b--black-10"
            postid={props.posts[i].id}
          >
            <Post id={props.posts[i].id} title={props.posts[i].title} />
            <div onClick={props.showUser} userid={props.posts[i].userId}>
              <User username={userObj.name} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PostList;
