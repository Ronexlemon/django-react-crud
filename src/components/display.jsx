import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./topbar";
const Display =()=>{
    const navigate = useNavigate();
    return(
<div className="bg-black h-full w-full">
    <TopBar/>


</div>
    )
}
export default Display;