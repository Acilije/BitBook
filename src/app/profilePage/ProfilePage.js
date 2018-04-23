import React, { Component } from "react";
import { userService } from "../../services/UserService";
import UserInfo from "./UserInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }
  
  componentDidMount() {
    this.getUser(this.props);
  }
  
  getUser = (props) => {
    if(props.match.params.id){
      this.fetchProfile(props.match.params.id);
    } else {
      this.fetchMyProfile();
    }
  }
  componentWillReceiveProps(nextProps){
    this.getUser(nextProps);
  }

  fetchProfile = (id) => {
    userService.fetchUser(id).then(userProfile => {
      this.setState({
        userInfo: userProfile,
        isMyProfile: false
      });
    });
  };

  fetchMyProfile = () => {
    userService.fetchProfile()
    .then(myProfile => {
      this.setState({
        userInfo: myProfile,
        isMyProfile: true
      });
    });
  };


  render() {
    return (
      
      <div className="row">
        <UserInfo profile={this.state.userInfo} />
      
      
      </div>
    );
  }
}

export default Profile;
