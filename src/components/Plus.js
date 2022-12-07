import React from "react"
import '../style/Plus.css';
import CountPlus from './CountPlus'

export default function Plus() {
    
    const [count, setCount] = React.useState(0)

    function hendlerMinPus(event) {
      let operator = event.target.textContent
      if (operator === '–') {
        setCount(preCount => preCount - 1)
      }
      else {
        setCount(preCount => preCount + 1)
      }
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={hendlerMinPus}>–</button>
            <CountPlus count={count} />
            <button className="counter--plus" onClick={hendlerMinPus}>+</button>
        </div>
    )
}
