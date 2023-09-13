import React from "react";

const Box = (props) => {
    const styles = {
        backgroundColor: props.on ? "black" : "grey"
    }
    return (
        <div className="box" style={styles} ></div>
    );
}

export default Box;