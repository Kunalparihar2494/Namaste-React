import User from "./User";
import UserClass from "./UserClass";
import React, { useContext } from "react";
import CompanyContext from './Contact';

// class About extends React.Component {
//   constructor(props) {
//     super(props)
//     // console.log("Parent Constructor");
//   }
//   componentDidMount(){
//     // console.log("Parent Component did mount")
//   }
//   render() {
//     // console.log("Parent Render");
//     return (
//       <div>
//         <h1>Abount Class Component</h1>
//         <h3>We are new</h3>
//         {/* <User /> */}
//         <UserClass name={"First"} location={"Indore"} />
//         {/* <UserClass name={"Second"} location={"Mumbai"} /> */}
//       </div>
//     );
//   }
// }

const About = () =>{
  const contactContext = useContext(CompanyContext);
    return (
        <div>
            <h1>Abount us</h1>
            <h3>We are new</h3>
            <h3>{contactContext}</h3>
            {/* <User /> */}
            <UserClass />
        </div>
    )
}

export default About;
