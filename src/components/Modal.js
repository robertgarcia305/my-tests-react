// Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  // if you only want to make it without transitions
  const modalStyle = {
    display: props.modal ? "flex" : "none"
  };

  return (
    <div
      className={`modal ${props.modal ? "modal-active" : ""}`}
      // style={modalStyle}
    >
      <h3>this is my modal</h3>
      <p>you can close it when you click on the button</p>
      <button onClick={props.close}>click me now</button>
    </div>
  );
};

export default Modal;

// App.js
import { useState } from "react";
import "./styles.css";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="app-wrap">
      <h3>this is my modal example</h3>
      <p>
        please go ahead and click on the button so that you open the modal with
        a transition
      </p>
      <button onClick={openModal}>click me</button>
      <Modal modal={modal} close={closeModal} />
    </div>
  );
};

export default App;


// index.css
// .App {
//     font-family: sans-serif;
//     text-align: center;
//   }
  
//   .modal {
//     background-color: #949494;
//     position: absolute;
//     width: 0px;
//     height: 0px;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     border-radius: 20px;
//     padding: 10px;
//     opacity: 0;
//     transition: opacity 0.3s;
//     visibility: hidden;
//   }
  
//   .modal-active {
//     opacity: 1;
//     width: 200px;
//     height: 200px;
//     visibility: visible;
//   }

// index.js
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
