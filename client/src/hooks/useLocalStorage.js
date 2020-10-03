import { useState } from 'react'

function getSavedValue(key, initialValue)

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(initialValue)

    return [value, setValue]
    
}