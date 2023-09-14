//Tabs.js
import React from "react";
import ReactDOM from "react-dom";

const Tabs = (props) => {
  return (
    <div className="tab-wrap">
      <div className="topMenu">
        <div
          className="tab"
          onClick={() => {
            props.checkDisplay(1);
          }}
        >
          tab 1
        </div>
        <div
          className="tab"
          onClick={() => {
            props.checkDisplay(2);
          }}
        >
          tab 2
        </div>
        <div
          className="tab"
          onClick={() => {
            props.checkDisplay(3);
          }}
        >
          tab 3
        </div>
      </div>
      <div className="content">
        <div className={`block ${props.display === 1 ? "active" : ""}`}>
          <h3>1 this is the first content</h3>
          <p>this is the first content</p>
        </div>
        <div className={`block ${props.display === 2 ? "active" : ""}`}>
          <h3>2 this is the second content</h3>
          <p>this is the second content</p>
        </div>
        <div className={`block ${props.display === 3 ? "active" : ""}`}>
          <h3>3 this is the third content</h3>
          <p>this is the third content</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;



//App.js
import React, { useState } from "react";
import "./styles.css";
import Tabs from "./Tabs";

const App = () => {
  const [display, setDisplay] = useState(1);

  const checkDisplay = (activeTab) => {
    if (activeTab === 1) {
      setDisplay(1);
    } else if (activeTab === 2) {
      setDisplay(2);
    } else {
      setDisplay(3);
    }
  };

  return (
    <div className="">
      <Tabs checkDisplay={checkDisplay} display={display} />
    </div>
  );
};

export default App;


//index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



//styles.css
// .App {
//     font-family: sans-serif;
//     text-align: center;
//   }
  
//   * {
//     margin: 0px;
//     box-sizing: border-box;
//   }
  
//   .tab-wrap {
//     border: 1px solid black;
//   }
  
//   .topMenu {
//     display: flex;
//     justify-content: center;
//     border: 1px solid black;
//   }
  
//   .tab {
//     background-color: #263d6c;
//     color: white;
//     padding: 10px;
//     cursor: pointer;
//     margin: 0px 5px;
//   }
  
//   .tab:hover {
//     background-color: #223344;
//     color: white;
//     padding: 10px;
//     cursor: pointer;
//     margin: 0px 5px;
//   }
  
//   .content {
//     display: flex;
//     justify-content: center;
//   }
  
//   .block {
//     margin: 10px;
//     padding: 20px;
//     border: 1px solid blue;
//     border-radius: 10px;
//   }
  
//   .block {
//     display: none;
//     padding: 10px;
//   }
  
//   .block.active {
//     display: block;
//     background-color: #fff;
//   }
  