import React from "react";

class Normal extends React.Component {
  render() {
    console.log("Normal Component Render");
    return (
      <div>
        <div>
          Normal Usage Component {this.props.name} {this.props.dept}{" "}
        </div>
      </div>
    );
  }
}

export default Normal;
