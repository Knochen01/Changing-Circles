import React from "react";

const ColorButton = ( {addCircle, color} ) => {
    return (
        <div>
            <button
              style={{backgroundColor: color}}
              onClick={() => addCircle(color)}
              className="ColorButton">

                {color}

              </button>
        </div>
    )
}
export default ColorButton;