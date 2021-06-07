import React, { useState,useEffect } from 'react';

function Functional(){

    const [count,setCount] = useState(0);
    const names = ["1","2"]


    useEffect(()=>{//component Did Mount
    

    
    })

    useEffect(()=>{// component DidUpdate




       },[count])


       useEffect(()=>{// component will unmount

        return()=>{


        }

    })

    const increment =() =>{

        setCount(count+1);

    }


    return<h1>
        {
            count==0? <p>your count is zero</p>:<p>your count is greater than zero</p>
        }
        {

            names.map(n=><h2 key={n}>{n}</h2>)
        }
       
        <button onClick={increment}>Increment</button>
    </h1>
}

export default Functional;
