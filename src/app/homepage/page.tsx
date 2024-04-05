"use client"
import React from "react";
import {useRouter} from "next/navigation";



const homepage = () => {
    const router = useRouter()

    
    const handleBack = () => {
        router.push('/')
    }
    return (<div className ="py-3">
        this is homepage
        <br/>
     <button className = "bg-blue-500 rounded-md p-3" onClick = {handleBack}>back
     </button> </div>
    )
}

export default homepage;