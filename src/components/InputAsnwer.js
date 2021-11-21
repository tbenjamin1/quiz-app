import React from 'react'
import { useState, useEffect } from 'react';
import TimeOut from "./TimeOut";
 

const InputAsnwer = (props:any) => {
    const {initialMinute = 1,initialSeconds = 60} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)

                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });



     

    return minutes > 0 ?(
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>

    ):(

         
<div className="flex justify-center items-center">
  <div
    className=" loader ease-linear  flex items-center justify-center rounded-full border-8 border-t-8 border-red-500   h-32   w-32 ">quiz over</div>
   
</div>


    );
      
        
    
}

export default InputAsnwer;