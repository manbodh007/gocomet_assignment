import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostDetails } from "../action/action";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return {};
}

class Post extends Component {
  showPostDetails = () => {
    const { post } = this.props;
    this.props.dispatch(fetchPostDetails(post.link));
  };
  render() {
    const { post } = this.props;
    return (
      <Link to = '/post-details'>
        <div className="post-item" onClick={this.showPostDetails}>
          <div className="post-header">
            <div className="post-auther">{post.auther}</div>
            <div className="post-time">{post.time}</div>
          </div>
          <div className="post-content">{post.content}</div>
          <div className="post-description">{post.description}</div>
        </div>
      </Link>
    );
  }
}

export default connect(mapStateToProps)(Post);
