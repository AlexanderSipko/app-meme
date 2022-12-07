
import '../style/Answer.css';
import React from "react"

export default function Answer() {

    let {answerOne, answerTwo} = ''
    answerOne = 'Alex 1'
    answerTwo = 'Alex 2'

    const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
    
   
    function handleClick() {
        setIsImportant(preInst => !preInst)
    }
    const myStyle={
        backgroundImage: 
        "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",

    };

    return (
        <section className='answe' style={myStyle}>

            <h2 className="answe--title">{answerOne}</h2>
            <p>{isImportant ? "Yes": "No"}</p>
            <h2 onClick={handleClick} className="answe--title">{answerTwo}</h2>
        </section>
    )
}

