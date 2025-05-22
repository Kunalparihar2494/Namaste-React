import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name:"Dummy",
        bio: "Default"
      }
    };

    // console.log(this.props.name + "User Class Child Contructor");
  }

  async componentDidMount(){
    // console.log(this.props.name + " Child Component did mount")
    const data = await fetch(" https://api.github.com/users/kunalparihar2494");
    const json = await data.json();

    console.log('data-',json)
    this.setState({
        userInfo:json
    })
    
  }

  componentDidUpdate(){
    console.log('Child Compponent Did Update')
  }

  componentWillUnmount(){
    console.log('Child will Unmount');
  }

  render() {
     console.log("User Class render");
    return (
      <div className="user-card">
        {/* <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Bio: {this.state.userInfo.bio}</h3>
      </div>
    );
  }
}

export default UserClass;
