import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./topbar";
const Display =()=>{
    const navigate = useNavigate();
    const Items=[
        {
            id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
        },
        {
            id: 2,
    title: "Best Man",
    description: "The best man to host a show",
    completed: true,
        }


    ]
    return(
<div className="h-screen w-full  bg-black">
    <TopBar/>
   <div className="grid grid-cols-3 gap-4 mt-8">

 
    
    
    
        {Items.map((item)=>(
            
                <div className="text-white h-36 rounded-2xl bg-blue-200    " key={item.id}>
            
                 <h2>
                    Title: {item.title}
                 </h2>
                <h1 >
                    {item.description}
                   
                </h1>
                <h3>
                    completed: {item.completed? "True":"False"}
                </h3>

            
            </div>
        ))}
        

    

        </div>
</div>
    )
}
export default Display;