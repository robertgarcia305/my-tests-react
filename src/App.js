// steps:
//go to your directory where you want to add the react app
//   my-app should be changed to whatever your name of the app
//   npx create-react-app my-app
//   cd my-app

//   npm start
// if npm start doesn't work do: 

// npm install react-scripts
// then react-scripts start

// import logo from "../src/img/logo.svg";
// import './App.css';

// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// // import components
// import Modal from "../src/components/Modal";
// import Menu from "../src/components/Menu"

// const App = () => {
//   // states
//   const [isModalOpen, setModalOpen] = useState(false);

//   //functions
//   const openModal = () => {
//     setModalOpen(true);
//   }

//   const closeModal = () => {
//     setModalOpen(false);
//   }

//   return (
//     <div className="app-wrap">

//       {/* modal */}
//       <div className="modal-app-wrap">
//         <h3>please click the modal</h3>
//         <Modal 
//         closeModal={closeModal}
//         isOpen={isModalOpen}
//         />

//         <button onClick={openModal}>click me to open</button>
//       </div>

//       {/* menu */}
//       <div className="menu-app-wrap">
//         <Menu />
//       </div>

//     </div>
//   );
// }

// export default App;





// box challenge

import {React, useState } from "react";
import ReactDOM from "react-dom";
import Box from "./components/Box";

import boxes from "./squaresData";

const App = () => {
  const [squares, setSquares] = useState(boxes);


  const squareElements = squares.map(square => {
    return (
      <Box key={square.id} on={square.on}/>
    )
  });

  return (
    <div className="container">
      {squareElements}
    </div>
  );
}

export default App;