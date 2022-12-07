import React from "react"
import '../style/Plus.css';


export default function Plus() {
    
    const [count, setCount] = React.useState(0)

    function hendlerPus() {
      setCount(preCount => preCount + 1)
    }

    function hendlerMinus() {
      setCount(preCount => preCount - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={hendlerMinus}  >–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={hendlerPus}>+</button>
        </div>
    )
}
