// steps:
//go to your directory where you want to add the react app
//   my-app should be changed to whatever your name of the app
//   npx create-react-app my-app
//   cd my-app

//   npm start
// if npm start doesn't work do: 

// npm install react-scripts
// then react-scripts start

import logo from './logo.svg';
import './App.css';

import React from "react";
import ReactDOM from "react-dom";

// import components
import Modal from "../src/components/Modal";

const App = () => {
  // states
  const [isModalOpen, setModalOpen] = useState(false);

  //functions
  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="app-wrap">
      <h3>please click the modal</h3>
      <Modal 
      closeModal={closeModal}
      isOpen={isModalOpen}
      />

      <button onClick={openModal}>click me to open</button>
    </div>
  );
}

export default App;
