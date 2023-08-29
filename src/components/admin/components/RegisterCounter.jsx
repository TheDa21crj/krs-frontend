import React from "react"
import { useState,useContext } from "react";
import axios from "axios";
import AuthContext from "../../../store/auth-context";
import { useLayoutEffect } from "react"


function RegisterCounter({fid,sid}){
    const authCtx=useContext(AuthContext)
const [count,setCount]=useState(0)
const [counter,setCounting]=useState(0)
   async function changecount(){
    const resp = await axios.post(`/api/registration/register/counter/`,{formid:fid,sheetid:sid},{headers:{ "Authorization": `${authCtx.token}`}});
     const counting=resp.data
     var c=count+1
     if(counting.count!==counter){

      setCounting(counting.count)
     }
     setCount(c)
   }
    useLayoutEffect(() => {
        const slideIntervalc=  setInterval(() => {
       
            changecount();
            
          }, 3000);
    
        return ()=>{clearInterval(slideIntervalc) }
        }, [count]);

    
return(
    <div className="flex justify-center items-center rounded-lg my-20 text-4xl h-10 w-28 bg-[#EAB308]">
      {counter}
    </div>
)
}

export default RegisterCounter