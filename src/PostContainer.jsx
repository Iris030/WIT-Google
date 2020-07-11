import React from "react";
import Post from "./Post";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  componentDidMount() {
    this.setState({loading: true})
    fetch("http://localhost:8081/getFormsByType?type=${this.props.location.pathname}")
      .then(response => response.json())
      .then(data => {
        this.setState({
          tasks: data
        })
      })
  }

  render() {    
    /*
    const result = [{
    id : 1,
    name:{
      value:"String",
      can_public:false
    },
    Address:{
    value:"String",
    can_public:false
    },
    Contact_info:{
      value:"String",
      can_public: false
    },
    Pic:{
      value:"String",
      can_public: false
    },
    Time:"String",
    Type:"String",
    Content:"String",
    Services:[],
    Resolve:{
      status:false,
      helper:"String"
    },

    Replies:[
      {
    username:"name",
        reply:"String"
      },
    ],
    },
    {
      id : 2,
      name:{
        value:"String",
        can_public:false
      },
      Address:{
      value:"String",
      can_public:false
      },
      Contact_info:{
        value:"String",
        can_public: false
      },
      Pic:{
        value:"String",
        can_public: false
      },
      Time:"String",
      Type:"String",
      Content:"String",
      Services:[],
      Resolve:{
        status:false,
        helper:"String"
      },
  
      Replies:[
        {
      username:"name",
          reply:"String"
        },
      ],
      }
    ];*/
    return (
      <div>
        {this.state.tasks.map((r) => {
          return <Post form={r} />;
        })}
      </div>
    );
  }
}

export default PostContainer;
