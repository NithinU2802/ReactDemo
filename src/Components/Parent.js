// import React from "react";
// import PureComponent1 from "./PureComponent1";
// import Normal from "./Normal";

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Nithin",
//       dept: "CSE",
//     };
//   }
//   ComponentMount() {
//     setInterval(() => {
//       this.setState({
//         name: "Nithin",
//       });
//     }, 3000);
//   }
//   render() {
//     console.log("Parent Component Render")
//     return (
//       <div>
//         <p>Parent Component</p>
//         <Normal name={this.state.name} dept={this.state.dept} />
//         <PureComponent1 name={this.state.name} dept={this.state.dept} />
//       </div>
//     );
//   }
// }

// export default Parent;

import React, { useEffect, useState } from "react";
import PureComponent1 from "./PureComponent1";
import Normal from "./Normal";

function Parent() {
  const [name, setName] = useState("Nithin");
  const [dept, setDept] = useState("CSE");

  useEffect(() => {
    const interval = setInterval(() => {
      setName("Nithin");
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log("Parent Component Render");

  return (
    <div>
      <p>Parent Component</p>
      <Normal name={name} dept={dept} />
      <PureComponent1 name={name} dept={dept} />
    </div>
  );
}

export default Parent;