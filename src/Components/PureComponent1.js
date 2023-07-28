import React from "react";

export class PureComponent1 extends React.PureComponent {
  render() {
    console.log("Pure Component Render");
    return (
      <div>
        <p>
          PureComponent Usage {this.props.name} {this.props.dept}
        </p>
      </div>
    );
  }
}

export default PureComponent1;
