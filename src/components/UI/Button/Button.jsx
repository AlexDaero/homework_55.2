import React, { useState } from "react";
import './Button.css'

function Button(props) {
    const [styles, setStyles] = useState({ background: props.backColor, width: props.width, color: props.color })
    return (
        <button className="button" style={styles} onClick={props.click}>{props.text}</button>
    )
}

export default Button