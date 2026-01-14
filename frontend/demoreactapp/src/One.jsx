import { use, useEffect } from "react";

const One=(props)=>{
  useEffect(()=>{
    console.log("Child parent");
  },[])
    return(
        <>
        {props.val}
         <button onClick={()=>props.setVal(props.val+1)}>click me</button>
        </>
    )
}
export default One;