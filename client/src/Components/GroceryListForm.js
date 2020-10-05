import React, { useState } from 'react'

export default function GroceryListForm({addFood}) {
    const [item, setItem] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addFood(item)
        setItem('');
    }
    return (
      <form onSubmit={handleSubmit}>
          <label>Item name:</label>
          <input type="text" value = {item} required onChange={(e) => setItem(e.target.value)} />
          <input type="submit" value="Click To Add Item" />
      </form>
    )
}
