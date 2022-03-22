import React from 'react'



function Basics() {
    function getTitle(title) {
        return title;
    }
    const list = [{
        id:1,
        name: 'pavan',
        age: 25,
        occupation: 'sde1'
    },
    {   
        id:2,
        name: 'sunil',
        age: 27,
        occupation: 'sde2'
    }]
    const abc = 'pavan'
    return (
        <div>
            <div>hello {abc}</div>
            <div>{getTitle('React Title')}</div>
            <div>
                {list.map(item => <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.age}</div>
                <div>{item.occupation}</div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Basics