import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import FeedPage from "./feedPage/FeedPage";
import PeoplePage from "./peoplePage/PeoplePage";
import ProfilePage from "./profilePage/ProfilePage";
import SinglePostPage from "./singlePostPage/SinglePostPage";
import WelcomePage from "./welcomePage/WelcomePage";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("userInfo")) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  isLoggedInHandler = isLoggedIn => {
    console.log("is logged in: " + isLoggedIn);
    this.setState({
      isLoggedIn
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <div>
            <Header loggedIn={this.isLoggedInHandler} />
            <Switch>
              <Route exact path="/" component={FeedPage} />
              <Route path="/people" component={PeoplePage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/peoplePage/:id" component={ProfilePage} />
              <Route path="/:type/:id" component={SinglePostPage} />
             
              
              <Redirect from="/login" to="/" />
            </Switch>
          </div>
        ) : (
          <Switch>
            <Route
              exact
              path="/login"
              render={() => <WelcomePage loggedIn={this.isLoggedInHandler} />}
            />
            <Redirect from="/" to="/login" />
          </Switch>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
