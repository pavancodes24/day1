import React from 'react'



function Basics() {
    function getTitle(title) {
        return title;
    }
    const list = [{
        name:'pavan',
        age: 25,
        occupation: 'sde1'
    },
    {
        name:'sunil',
        age:27,
        occupation: 'sde2'
    }]
    const abc = 'pavan'
    return (
        <div>
            <div>hello {abc}</div>
            <div>{getTitle('React Title')}</div>
            <div></div>
        </div>
    )
}

export default Basics