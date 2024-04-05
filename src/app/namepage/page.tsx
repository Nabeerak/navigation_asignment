"use client"
import React from "react";
import {useRouter} from "next/navigation";



const Namepage = () => {
    const router = useRouter()
    
    const handleBack = () => {
        router.push('/')
    }
    return (<div className ="py-3">
        this is namepage
        <br/>
     <button className = "bg-blue-500 rounded-md p-3" onClick = {handleBack}>back
     </button> </div>
    )
}

export default Namepage;