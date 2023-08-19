import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    return (
        // this might need a modal-inactive class so that the modal closes with a transition also
        <div className={`modal ${props.isOpen ? "modal-active" : ""}`}>
            <h3>this is my modal</h3>
            <p>this is some paragraph of the modal</p>
            <button onClick={props.closeModal}>Close Modal</button>
        </div>
    );
}

export default Modal;