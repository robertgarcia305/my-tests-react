
// 08/24/2023
// counter

// Counter.js
import React from "react";
import ReactDOM from "react-dom";

const Counter = (props) => {
    return (
        <div>
            <button onClick={props.minus}>Minus</button>
            <div>{props.value}</div>
            <button onClick={props.plus}>Plus</button>
        </div>
    );
};

export default Counter;


// App.js
import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";

const App = () => {
    const [number, setNumber] = useState(0);
    let result;

    // create a main function that holds both functions with conditions 
    const add = () => {
        if (number > 0) {
            result = number + 1;
            setNumber(result)
        } else {

        } 
    }

    const substract = () => {
        if (number > 0) {
            result = number - 1;
            setNumber(result);
        } else {
            
        }
    }

    return (
        <Counter 
        minus={substract}
        value={number}
        plus={add}
        />

    );
}


// index.js

import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
);