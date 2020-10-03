//Import React and any hooks needed for components
import React, { useState, useEffect } from 'react'

import GroceryListForm  from './GroceryListForm'

//uuid package to produce unique id's for our state
import { v1 as uuid } from 'uuid';

//Exporting functional component globally
export default function GroceryList() {

//useState hook to keep a state for our list and setlist method
//Storing our list as an array of objects
    const [list, setList] = useState([
        {item: 'milk', id: 1},
        {item: 'bacon', id: 2},
        {item: 'eggs', id:3}
    ]);
    const addFood = (item) => {
        setList([...list, {item, id: uuid()}])
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
        console.log('test')
    }, [list])

        return (
            <div className="grocery-list">
            <h3>
                Your Grocery list has {list.length} items. <br/>
            </h3>
            <GroceryListForm addFood={addFood}/>
                <ul style = {{textAlign: "left"}}>
                {list.map(list => {
                    return ( <li key={list.id}>{list.item}</li> );
                })}                
                </ul>

                
            </div>
        )
}
