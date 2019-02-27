import React from "react";


const hoc=(Wrapped)=>{
    return (props)=>{
        return (
            <Wrapped  {...props}/>
           
        );
    }
}

export default hoc;