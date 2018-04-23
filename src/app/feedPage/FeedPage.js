import React, { Component } from "react";
import { postService } from "../../services/PostService";
import TextPost from "./TextPost";
import VideoPost from "./VideoPost";
import ImagePost from "./ImagePost";
import CreateNewPost from "./CreateNewPost";
import NewTextPost from "./NewTextPost";
import NewVideoPost from "./NewVideoPost";
import NewImagePost from "./NewImagePost";

import FilterPost from "./FilterPost";
import M from "materialize-css";

class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.fetchPosts();
    var el = document.querySelector(".dropdown-trigger");
    M.Dropdown.init(el);
  }

  fetchPosts = () => {
    postService.fetchPost()
      .then(postData => {
        this.setState({
          posts: postData,
          filteredPosts: postData
        });
    });
  };

  filterPosts = postType => {
    this.setState({
      filteredPosts: this.state.posts.filter(el => {
        return el.type === postType;
      })
    });
  };

  render() {
    return (
      <div>
        <FilterPost filter={this.filterPosts} allPosts={this.fetchPosts} />
        <div className="container">
          {this.state.filteredPosts.map(post => {
            if (post.type === "text") {
              return <TextPost post={post} key={post.postId} />;
            } else if (post.type === "image") {
              return <ImagePost post={post} key={post.postId} />;
            } else {
              return <VideoPost post={post} key={post.postId} />;
            }
          })}

          <CreateNewPost />
          <NewTextPost reloadPage={this.fetchPosts} />
          <NewImagePost reloadPage={this.fetchPosts} />
          <NewVideoPost reloadPage={this.fetchPosts} />
        </div>
      </div>
    );
  }
}

export default FeedPage;
