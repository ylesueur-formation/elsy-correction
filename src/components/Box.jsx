import React from "react";

export function Box(props) {
    const monStyle = {
        fontSize: "100px",
        color: props.color
    }
    return (
        <div className="box col-sm-3 col-6">
            <span className="material-icons" style={monStyle}>
                {props.icon}
            </span>
            <p>{props.value} {props.unit}</p>
        </div>
    );
}
