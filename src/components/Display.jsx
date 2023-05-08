import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display</legend>
            <p>{JSON.stringify(props.boxes)}</p>
            <div>
                {
                props.boxes.map((box,idx) => {
                    return (
                            <p key = {idx} style={{backgroundColor: box.color, width: "100px", height: "100px"}}></p>
                    )
                }
                )
                }
            </div>
        </fieldset>
    )
}

export default Display