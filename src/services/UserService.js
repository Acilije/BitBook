import User from "../entities/User";
import { authService } from "./AuthenticationService";
import { SERVER_KEY } from "../shared/constants";

class UserService {
  fetchUsers() {
    return fetch("http://bitbookapi.azurewebsites.net/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
      }
    })
      .then(response => response.json())
    .then(userList => {
      // console.log("USERLISTOVDE", userList)
      return userList.map(user => new User(user))
    });
  }

  fetchUser(id) {
    return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
      }
    })
      .then(response => response.json())

      .then(user => new User(user))
  }

  fetchProfile() {
    return fetch(`http://bitbookapi.azurewebsites.net/api/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
      }
    })
      .then(response => response.json())

      .then(user => new User(user));
  }

  editProfile(name, about, email, aboutShort, avatarUrl) {
    return fetch("http://bitbookapi.azurewebsites.net/api/Profiles", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
        "SessionId": authService.getSessionId()
      },
      body: JSON.stringify({
        "name": name,
        "about": about,
        "email": email,
        "aboutShort": aboutShort,
        "avatarUrl": avatarUrl
      })
    }).then(response => response.json());
  }
}

export const userService = new UserService();
