import React, {useState} from 'react'
import '../App.css';

const BoxGen = (props) => {
    const [color, setColor]  = useState("")
    const formSubmit = (e) => {
        e.preventDefault()
        const newBox = {
            color
        }
        props.addBox(newBox)
        setColor("")
    }
    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='bob'>Color: </label>
            <input id="bob" type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
            <button>Add</button>
        </form>
    )
}

export default BoxGen