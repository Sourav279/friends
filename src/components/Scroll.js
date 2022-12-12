import React from "react";
const Scroll = (props)=>{
    return (
        <div style={{overflowY:'scroll', height:'600px', backgroundColor :"black"}}>
            {props.children}
        </div>
    )
}
export default Scroll;