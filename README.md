# ReactDemo
    React js is a JavaScript library for building fast and interactive user interface for the web as well as mobile applications.

# Important features
    - It is an Open-Source, reusable component-based front-end library.
    - In a Model View Controller Archi, React is the View which responsible for how the app looks and feels.
    - JSX - file to run JavaScript and HTML which integrated with eachother.
    - Consist Virtual DOM and Real DOM. React keeps a lightweight represenation of the Real DOM in the 
    memory and that is known as Virtual DOM.
    - When the state of an object changes, Virtual DOM changes only that object in the real DOM instead of 
    updating all the objects.
    - One-Way data binding keeps everything modular and faster.
    - Unidirectional dataflow means that when design a react app you often next child components within 
    parent components.
    - Reacts goes beyond simple UI and has many extensions for complete applications.
    - It provides server-side rendering.
    - support mobile app development.
    - Extended with flux and redux among others.
    - components, State and Props are major component of react.
# component
    - components are the building blocks of any react application and a single app usually Consist of 
    multiple components.
    - A component is essentially a piece of the user interface. It is like a function return HTML elements.
    - Splits the user interface into independent, reusable pieces that can processed seperately.
    - consist of state and render method.
    - state is the data that want the component to render.
    - Render is responsible for how the UI looks and feels to the user.
    - Stateless Functional components and statefull class component.
    Eg:
    import React from "react";

    class Simple extends React.component{
        state={}
        render(){
            return{
                <h1>Hello World</h1>
            }
        }
    }


# State
    - state of a component is an object that holds some data.
    - These data influences the output of a component.
    - Everytime component changes data rerender on the screen.


# Props
        - Props is short for properties that allow us to pass arguments or data to components.
        - Props are passed to components in the way similar to that of HTML-tag attributes.

        Eg:
        way to use props.

        App.js 
        import React from "react";

        class App extends React.component{
            render(){
                return{
                    <h1>{this.props.name}</h1>
                }
            }
        }

        Main.js 
        import React from "react";
        import ReactDOM from "react-dom";
        import App from "./App.jsx";

        ReactDOM.render(<App name="Nithin">, document.get ElementById('app));
        export default App;


# Nesting component
    components are nested into main component using import and export keywords.

    "export default class comp extends React.component"

    - Export default is used to export only one object(function,variable,class) from the file.
    - There can only be one default export per file.

    "import comp from "./Components/comp" is used to import default export from a file. we can use the
    keyword import before it.

    - "import {class1,class2} from "./component"; " importing named values allows the user to import multiple object from a file.


# Higher order and Pure components

    Higher order components - A higher-order component is a function that takes a component and return a new 
    component. It facilitates reusing of component logic.
    " const NewComponent = higherOrderComponent(originalComponent) "
    - To improve reusability of component.

    Pure Components - React.Component is the base class for React Components. React.PureComponent is 
    variation of React.Component class and does a shallow comparision of props and state.
    - A React COmponent can be considered pure if it renders the same output for the same state and props.