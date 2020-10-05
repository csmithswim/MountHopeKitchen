import React, { useContext, useState } from 'react'
export const RecipeContext = createContext();

//Start by making a simple state that just stores food

//recipe should be key and food should be value initially

export default function RecipeContextProvider(props) {
    const [food, setfoods] = useState(
        () => {
            const localData = localStorage.getItem('books');
            return localData ? JSON.parse(localData) : [];
        }
    )
    const addFood = (setfoods(() => {

    })

    useEffect(() => {
        localStorage.setItem('food', JSON.stringify(food))
    }, [food]);


    return (
        <div>
            
        </div>
    )
    
}


