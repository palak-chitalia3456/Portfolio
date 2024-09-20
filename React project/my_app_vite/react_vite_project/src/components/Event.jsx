//component for event handling
import React from 'react'
// we have to do console msg by clicking the button so we will use function in js to make this work. we will write js code above the return statement

function Event() {
    function handleClick(){
        console.log('Button clicked')
    }
  return (
    <div>
        <h1>Event Handling</h1>
        <button onClick={handleClick}>click me</button>
        {/* onclick property will call function and this property is from react not dom that's why its different from onclick event */}
    </div>
  )
}

export default Event