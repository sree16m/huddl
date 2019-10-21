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
      postData: {},
      userData: {},
      postComments: [],
      showPostView: false,
      showUserView: false,
      showPostList: true
    };

    this.showPost = this.showPost.bind(this);
    this.showUser = this.showUser.bind(this);
    this.showPostList = this.showPostList.bind(this);
  }

  showPost(event) {
    const postId = parseInt(event.currentTarget.getAttribute("postid"));
    const postData = this.state.posts.find(item => item.id === postId);
    const userData = this.state.users.find(
      item => item.id === parseInt(postData.userId)
    );
    const url = "https://jsonplaceholder.typicode.com/comments/" + postId;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          showPostView: true,
          showUserView: false,
          showPostList: false,
          postComments: data,
          postData: { postTitle: postData.title, userName: userData.name }
        });
      })
      .catch("Oops got some error while fetching comments!!!");
  }

  showUser(event) {
    event.stopPropagation();
    const userId = parseInt(event.currentTarget.getAttribute("userid"));
    const userData = this.state.users.find(item => item.id === userId);
    this.setState({
      showPostView: false,
      showUserView: true,
      showPostList: false,
      userData: userData
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
    if (posts.length === 0 && users.length === 0) {
      return <div>Loading...</div>;
    }

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
          <PostView
            showPostList={this.showPostList}
            postData={this.state.postData}
            postComments={this.state.postComments}
          />
        )}
        {this.state.showUserView && (
          <UserView
            showPostList={this.showPostList}
            userData={this.state.userData}
          />
        )}
      </div>
    );
  }

  componentDidMount() {
    const urls = [
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/posts"
    ];

    Promise.all(
      urls.map(url =>
        fetch(url)
          .then(response => response.json())
          .catch("Oops got some error")
      )
    ).then(data => {
      let [users, posts] = data;
      this.setState({ posts: posts, users: users });
    });
  }
}

export default App;
