import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";
import { randomF} from './RandomFunction'

const ColordCircles = () => {


    const [circles, setCircles] = useState([]);

    const addColor = (color) => {
        setCircles(colors => [...colors, { color, x: randomF(), y: randomF() }])
    }

    // const changePosition = (idx) => {
    //     setCircles(colors => {
    //         const newCircle = [...colors]
    //         newCircle[idx].x = randomF();
    //         newCircle[idx].y = randomF()
    //         return newCircle
    //     })
    // }
    const changePosition2 = (idx) => {
        setCircles(circles => (
            circles.map((color,i) => (
                i === idx 
                ?
                {...color, x: randomF(), y: randomF()}
                :
                color
            )
        )))
    }

    return (
        <div>
            <ColorButtons
            options={['peachpuff', 'lime', 'grey']}
            addCircle={addColor}
            />
            {circles.map(({ color, x, y }, idx) => (
                <Circle color={color} idx={idx} key={idx} x={x} y={y} changePosition={changePosition2} />
            ))}
        </div>
    )
}

export default ColordCircles;




