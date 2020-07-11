import React from "react";

class Post extends React.Component {
  render() {
    return <p>{this.props.form.name}</p>;
  }
}

export default Post;
