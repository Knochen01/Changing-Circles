import React from "react";
import ColorButton from "./ColorButton";
import './ColorButtons.css'


const ColorButtons = ({ addCircle, options }) => {
    return (
        <div>
            {options.map((color, idx) => (
             <ColorButton addCircle={addCircle} color={color} key={idx}/>
            ))}
        </div>
    )
}
export default ColorButtons