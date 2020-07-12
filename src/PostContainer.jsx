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
    
    /*const result = [{
    id : 1,
    name:{
      value:"IIIIIIis",
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
    Time:"11, sep",
    Type:"floop",
    Content:"bbbbbbbbbbbbbbbb",
    Title:"some title",
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
        value:"IIiiiiilis",
        can_public:true
      },
      Address:{
      value:"somewhere",
      can_public:true
      },
      Contact_info:{
        value:"xxx@email.com",
        can_public: true
      },
      Pic:{
        value:"String",
        can_public: true
      },
      Time:"11, sep",
      Type:"floop",
      Content:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      Title:"my home",
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
