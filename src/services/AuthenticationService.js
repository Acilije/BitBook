
import { SERVER_KEY } from '../shared/constants';
import { userService } from './UserService';
class Auth {
  login(user, pass) {
    return fetch("http://bitbookapi.azurewebsites.net/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY
      },
      body: JSON.stringify({
        "username": user,
        "password": pass
      })
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        sessionStorage.setItem('userInfo', JSON.stringify(response));
        userService.fetchProfile()
          .then(response => {
            sessionStorage.setItem('userId', response.id)
          })
      })
  }

  register(username, password, name, email) {
    return fetch("http://bitbookapi.azurewebsites.net/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "name": name,
        "email": email
      })
    }).then(response => {
      return response.json();
    });
  }

  logout = () => {
    sessionStorage.removeItem('userInfo');
    sessionStorage.removeItem('userId');
  }

  getSessionId() {
    return JSON.parse(sessionStorage.getItem('userInfo')).sessionId;
  }
}

export const authService = new Auth();
