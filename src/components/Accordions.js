//Accordion.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

import plusIcon from "./img/plus.png";
import minusIcon from "./img/minus.png";

const Accordion = (props) => {
  const [display, setDisplay] = useState(true);

  const toggle = () => {
    setDisplay(!display);
  };

  return (
    <div className="wrap">
      <div className="header-wrap" onClick={toggle}>
        <h3>{props.item.header}</h3>
        <img src={!display ? minusIcon : plusIcon}></img>
      </div>
      <div className={`description ${!display ? "show" : "hide"}`}>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default Accordion;


//App.js
import "./styles.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";

import Accordion from "./Accordion";

import accordionData from "./accordionData";

const App = () => {
  const acco = accordionData.map((item) => {
    return (
      <Accordion key={item.id} item={item} />
      // <Accordion
      //   key={item.id}
      //   // header={item.header}
      //   // description={item.description}
      //   item={item}
      //   toggle={toggle}
      //   display={icon}
      // />
    );
  });

  return <div>{acco}</div>;
};

export default App;


//accordionData.js
const accordionData = [
    {
      id: 1,
      header: "this is the first header",
      description: "this is going to be the paragraph"
    },
    {
      id: 2,
      header: "this is the first header",
      description:
        "this is going to be the paragraph, this is going to be a longer paragraph, this is going to be a longer paragraph, this is going to be a longer paragraph, this is going to be a longer paragraph, this is going to be a longer paragraph, this is going to be a longer paragraph, this is going to be a longer paragraph"
    },
    {
      id: 3,
      header: "this is the first header",
      description: "this is going to be the paragraph"
    },
    {
      id: 4,
      header: "this is the first header",
      description: "this is going to be the paragraph"
    },
    {
      id: 5,
      header: "this is the first header",
      description: "this is going to be the paragraph"
    }
  ];
  
  export default accordionData;
  

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
//   .App {
//     font-family: sans-serif;
//     text-align: center;
//   }
  
//   * {
//     margin: 0px;
//     box-sizing: border-box;
//   }
  
//   .description {
//     transition: max-height 0.5s ease-in-out; /* Only transition max-height */
//     max-height: 0px;
//     overflow: hidden;
//   }
  
//   .show {
//     color: red;
//     max-height: 1000px; /* Set a fixed value, could be smaller than 1000px */
//   }
  
//   .hide {
//     max-height: 0px; /* Set a fixed value for consistency */
//     color: blue;
//   }
  
//   .wrap {
//     width: 300px;
//     border: 1px solid red;
//   }
  
//   .header-wrap {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     cursor: pointer; /* Add cursor pointer to indicate interactivity */
//   }
  