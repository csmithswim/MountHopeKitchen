//Import React and any hooks needed for components
import React, { useState, useEffect } from 'react'

import GroceryListForm  from './GroceryListForm'

//uuid package to produce unique id's for our state
import { v1 as uuid } from 'uuid';

// import useLocalStorage from '../hooks/useLocalStorage.js'

//Exporting functional component globally
export default function GroceryList() {

//useState hook to keep a state for our list and setlist method
//Storing our list as an array of objects
    const savedlist = JSON.parse(localStorage.getItem('list'));
    const [list, setList] = useState(savedlist || []);
    const addFood = (item) => {
        setList([...list, {item, id: uuid()}])
    }
    
    //     const removeFood = (id) => {
    //     setList(list.filter(li => li.id !== id));
    // }

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
