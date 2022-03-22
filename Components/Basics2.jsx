import React from 'react'
const List = [{
    id: 1,
    name: 'pavan',
    age: 25,
    occupation: 'sde1'
},
{
    id: 2,
    name: 'sunil',
    age: 27,
    occupation: 'sde2'

}]

function Basics2() {
    return (
        <div>
            <Lst />
        </div>
    )
}
function Lst(){
    return List.map(item=>(
        <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.occupation}</div>
        </div>
    ))
}

export default Basics2