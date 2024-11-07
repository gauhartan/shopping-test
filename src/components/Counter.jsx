import { useState } from "react"


// Kundens krav:
// - Öka och minska antalet produkter av en viss sort i kundvagnen

// User stories:
// 1. som kund vill jag kunna öka antalet av en viss vara (+ knapp)
// 2. som kund vill jag kunna minska antalet av en viss vara (- knapp)
// 3. som kaosgeneral vill jag att antalet ska randomisas varje gång jag klickar (random knapp)


const Counter = () => {
    const [count, setCount] = useState(1);

    const handleAdd = () => setCount(count +1);
    const handleSubtract = () => {
        if(count > 0)
            setCount(count -1);
    }
    const handleRandom = () => {
        setCount( Math.floor(Math.random() * 101))
    }

    return (
        <div className ="counter">
            Product counter
            <p className="value">{count}</p>
            <button className="add-button" onClick={handleAdd}> + </button>
            <button className="subtract-button" onClick={handleSubtract}> - </button>
            <button className="random-button" onClick={handleRandom}> Suprise me </button>
        </div>
    )
}

export default Counter;