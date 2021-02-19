import React from 'react'

function Welcome({handleLogout}) {
    return (
        <div>
            
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Welcome
