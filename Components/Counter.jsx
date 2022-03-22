import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const addCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <div>Counter</div>
        <div>{count}</div>
        <button onClick={addCount}>ADD</button>
        <button onClick={()=>setCount(count-1)}>RED</button>
    </div>
  )
}

export default Counter