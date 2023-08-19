import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    return (
        <div className={`modal ${props.isOpen ? "modal-active" : ""}`}>
            <h3>this is my modal</h3>
            <p>this is some paragraph of the modal</p>
            <button onClick={props.closeModal}>Click here to open modal</button>
        </div>
    );
}

export default Modal;