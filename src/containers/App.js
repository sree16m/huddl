import React, { Component } from "react";
import PostList from "../components/PostList";
import PostView from "../components/PostView";
import UserView from "../components/UserView";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: [],
      showPostView: false,
      showUserView: false,
      showPostList: true
    };

    this.showPost = this.showPost.bind(this);
    this.showUser = this.showUser.bind(this);
    this.showPostList = this.showPostList.bind(this);
  }

  showPost(event) {
    console.log("showPost" + event.currentTarget.getAttribute("postid"));
    this.setState({
      showPostView: true,
      showUserView: false,
      showPostList: false
    });
  }

  showUser(event) {
    event.stopPropagation();
    console.log("showUser" + event.currentTarget.getAttribute("userid"));
    this.setState({
      showPostView: false,
      showUserView: true,
      showPostList: false
    });
  }

  showPostList(event) {
    this.setState({
      showPostView: false,
      showUserView: false,
      showPostList: true
    });
  }

  render() {
    const { posts, users } = this.state;
    return (
      <div className="tc">
        <h1 className="f1">My Blog</h1>
        {this.state.showPostList && (
          <PostList
            posts={posts}
            users={users}
            showPost={this.showPost}
            showUser={this.showUser}
          />
        )}
        {this.state.showPostView && (
          <PostView showPostList={this.showPostList} />
        )}
        {this.state.showUserView && (
          <UserView showPostList={this.showPostList} />
        )}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts }));
  }
}

export default App;
