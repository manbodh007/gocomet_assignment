import React, { Component } from "react";
import { fetchPost } from "../action/action";


class Tag extends Component {

  changeTagName = ()=>{
    const {tag,dispatch} = this.props;
    dispatch(fetchPost(tag));
  }

  render() {
      const {tag} = this.props;
    return (
        <button className="tag-name" onClick={this.changeTagName}>
          {tag}
        </button>
    );
  }
}

export default Tag
