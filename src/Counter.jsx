import { useState } from "react"

export default  function Counter(){
    const [count,setcount] = useState(0);
    const handeler = () => {
      const newCount = count + 1;
      setcount(newCount)
    }
    const handlereviw = () => {
        const newCount  = count - 1;
        setcount(newCount)
    }
    return (
        <div style={{border:'2px solid yellow'}}>
            <h1>Counter: {count}</h1>
            <button onClick={handeler}>Add</button>
            <button onClick={handlereviw}>Remove</button>
        </div>
    )
}