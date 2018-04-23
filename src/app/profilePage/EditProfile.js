import React, { Component } from "react";
import M from "materialize-css";
import { userService } from "../../services/UserService";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "",
      about: ""
    };
  }

  componentDidMount() {
    var element = document.querySelector("#modal1");
    M.Modal.init(element);
  }

  handleInputChange = event => {
    if (event.target.name === "myName") {
      this.setState({
        myName: event.target.value
      });
    } else if (event.target.name === "about") {
      this.setState({
        about: event.target.value
      });
    }
  };

  clickHandler = (sessionId) => {
    userService.editProfile(this.state.myName, this.state.about, " "," "," ",sessionId)
    .then(response => {
        if (response) {
          window.location = "/profile";
        }
      });
  };

  render() {
    return (
      <div>
        <p
          className="waves-effect waves-light btn modal-trigger blue darken-4"
          href="#modal1"
        >
          <i className="material-icons left">edit</i> Edit profile
        </p>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4 />
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="input_text"
                  type="text"
                  data-length="10"
                  name="myName"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="input_text">Full Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea2"
                  className="materialize-textarea"
                  name="about"
                  onChange={this.handleInputChange}
                  data-length="120"
                />
                <label htmlFor="textarea2">Description</label>
              </div>
            </div>
            <div className="modal-footer">
              <p className="modal-action  waves-effect waves-light btn left blue darken-4"  onClick={this.clickHandler}>
                <i className="material-icons left">done</i>Update
              </p>
              <p
                className="modal-action modal-close waves-effect waves-light btn right red"
               
              >
                <i className="material-icons left">highlight_off</i>Cancel
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
