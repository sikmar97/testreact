import React, {useEffect, useState} from 'react';
export const HomePage = () => {
   const [rerender, setRerender] = useState(0)
   
    useEffect(() => { 
            alert("Component Renderd")
        return () => {
            alert("Component Removed")
        }
    })
       
    return (
        <div>
            <h1>Welcome to my page!</h1>
            <button onClick={()=> setRerender(rerender + 1)}>Click To Render Component</button>

            <h1>Component Has Been Renderd {rerender} Times</h1>
        </div>
    )
}