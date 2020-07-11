import React from "react";
import Post from "./Post";

class PostContainer extends React.Component {
  render() {
    const result = [{ id: 1, name: "hi" }];
    return (
      <div>
        {result.map((r) => {
          return <Post form={r} />;
        })}
      </div>
    );
  }
}

export default PostContainer;
