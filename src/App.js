import "./styles.css";
import React from "react";
import Functional from "./Components/FunctionalComponent";
import FunctionalComponent from "./Components/FunctionalComponent";
import { ClassComponent, ClassComponent1 } from "./Components/ClassComponent";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import Parent from "./Components/Parent";

export default function App() {
  return (
    <div>
      <h1 id="root">Hi</h1>
      <h1> I am Nithin</h1>
      <Functional></Functional>
      <FunctionalComponent />
      <ClassComponent></ClassComponent>
      <ClassComponent />
      <ClassComponent1 />
      <h1>Learning HigherOrder Components and PureComponents</h1>
      <Click />
      <Counter />
      <Parent />
    </div>
  );
}
