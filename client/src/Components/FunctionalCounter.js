//Import Reat, hooks and any dependent functions from 'react' and other files
import React, { useState } from 'react'

//Defines and exports functional components so we can use it globally
export default function FunctionalCounter() {

    //Define our useState hook within our function body
    const [count, setCount] = useState(0);

    //Define functions in es6 syntax to increace/decrease/reset count

    //Increase count
    const countUp = () => {
        setCount(count + 1)
    }
    //Decrease count
    const countDown = () => {
        setCount(count - 1)
    }
    //Reset count
    const countReset = () => {
        setCount(0)
    }
    return (
        <div>
        <h2>
            This Is A Functional Component Counter <br />
            Count: {count}
        </h2> 
        {/* Link onclick with function */}
        <button onClick = {countUp}
        >
        +1
        </button>
        <button onClick = {countDown}
        >
        -1
        </button>
        <button onClick = {countReset}
        >      
        Reset Count
        </button>                
        </div>
    )
}
