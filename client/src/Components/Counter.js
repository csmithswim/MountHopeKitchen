//Import React and { Component }
import React, { Component } from 'react'

//Export counter component
export default class Counter extends Component {
    constructor(prop){
        super(prop)
        this.state = {
            count: 0, 
            ...prop.state
        }
        this.countUp = this.countUp.bind(this)
        this.counterDown = this.counterDown.bind(this)
        this.counterReset = this.counterReset.bind(this)
    }
    countUp() {
        this.setState((prevState) => ({
            count: prevState.count + 1}))
    }
   countDown() {
       this.setState((prevState) => ({
           count: prevState.count - 1 }))
   }
   countReset() {
       this.setState((prevState) => ({
           count: 0 }))
    }


    render() {

        const currentCount = this.state.count;

        return (
            <div>
            <h2>
                This is a Class Component 
                Count: {this.currentCount}
            </h2>
            <button
            onClick = {this.countUp}
            >
                +1
            </button>
            
            <button
            onClick = {this.countDown}
            >
                -1
            </button>
            
            <button
            onClick = {this.countReset}
            >
                Reset
            </button>
                
            </div>
        )
    }
}
