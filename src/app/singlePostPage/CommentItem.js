import React, { Component } from "react";
import { userService } from "../../services/UserService";

class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: ""
    };
  }

  componentDidMount() {
      this.fetchSingleUser();
  }

  fetchSingleUser = () => {
    userService.fetchUser(this.props.singleComment.authorId).then(response => {
      this.setState({
        avatarUrl: response.avatarUrl
      });
    });
  };

  render() {
    return (
      <div className="">
        <div className="collection">
          <ul className="collection-item avatar">
            <div>
              <li>
                <img className="circle" alt="avatar" src={this.state.avatarUrl} />
              </li>
              <li>
                <h5>{this.props.singleComment.authorName}</h5>
                <span className="secondary-content blue-text text-darken-4">
                  {this.props.singleComment.dateCreated}
                </span>
                <br />
                <p>{this.props.singleComment.body}</p>
                <br />
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default CommentItem;
