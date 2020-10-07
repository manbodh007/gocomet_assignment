import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../action/action";
import Post from "./Post";
import Tag from "./Tag";

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.clearId = "";
    this.element = '';

    this.state = {
      tagValue: "",
    };
  }
  componentDidMount() {
    const { data } = this.props;
    let tag = data.Tag;
    if (data.progress === false) {
      this.setState({
        tagValue: tag,
      });
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
  
    const self = this;
    clearTimeout(this.clearId);
    this.element = e.target.value;

    this.clearId = setTimeout(() => {
      self.props.dispatch(fetchPost(self.element));
    }, 500);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="app">
        <input
          type="text"
          placeholder="Search tags"
          onChange={this.handleChange}
          className="search-box"
        />
        {data.progress === true ? (
          <div>Loading ...</div>
        ) : (
          <div className="post-container">
            {data.data.posts.map((post, i) => (
              <Post post={post} key={i} dispatch={this.props.dispatch} />
            ))}
            <div className="tags">
              <div className="tag-heading">Related Tags</div>
              {data.data.tags.map((tag, i) => (
                <Tag tag={tag} key={i} dispatch={this.props.dispatch} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
