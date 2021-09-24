import React from 'react'

function Keypad() {

    function onChangeHandler(){
        console.log('Entering password...')
    }

    return (
        <div>
            <p>I'm keypad</p>
            <input type="password" onChange={onChangeHandler}/>
        </div>
    )
}

export default Keypad

