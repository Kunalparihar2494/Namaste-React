import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count:0,
            count2: 2,
        }
    }
  render() {
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count+1
            })
        }}>
            Count Increase
        </button>
        <h2>Name: Kunal</h2>
        <h3>Location: Indore</h3>
      </div>
    );
  }
}

export default UserClass;
