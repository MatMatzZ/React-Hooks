import React, {useState} from 'react'

function HooksCounterThree() {
    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    onChange={e=> setName({...name, firstName:e.target.value})}
                />
                <input 
                    type="text" 
                    onChange={e=> setName({...name, lastName:e.target.value})}
                />
                <h2>Firstname: {name.firstName}</h2>
                <h2>Lastname: {name.lastName} </h2>
            </form>
        </div>
    )
}

export default HooksCounterThree
