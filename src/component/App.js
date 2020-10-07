import React, { Component } from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import PostDetail from "./PostDetail";
import Home from "./Home";

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

class App extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    if (data.progress === false) {
      console.log(data.data.posts);
      console.log("postDetail", data.postDetail);
    }
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              return <Home {...props} />;
            }}
          />

          <Route
            path="/post-details"
            render={(props) => {
              return <PostDetail {...props} postDetail={data.postDetail} progress = {data.progress} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
