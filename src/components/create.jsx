import React from "react";
import { useState } from "react";
import TopBar from "./topbar";

const Create= ()=>{
    const [title,setTitle] = useState();
    const [description,setDescription] = useState("");
    const [completed,setCompleted] = useState(false);
    return(
        <div className=" h-screen w-full bg-black ">
            <TopBar/>
            <div className="flex items-center justify-center h-full w-full">

            
            <div  className="bg-slate-400 w-1/2 h-1/2 rounded-2xl  grid grid-rows-4 gap-4  justify-center">
                <form>
                    <label>Title:</label><br/>
                    <input className="text-center"  type="text" placeholder="The great man "  onChange={event=>setTitle(event.target.value)}/><br/>
                    <label>Description:</label><br/>
                    <input type='text' className="text-center"  placeholder="Best Selling book " onChange={event=>setDescription(event.target.value)}/><br/>
                    <label>Completed:</label>
                    <div className="grid grid-cols-2 gap-4">
                        {!title?<div>
                            
                            <label>True</label><br/>
                        <input type="checkbox"  placeholder="The great man " onClick={()=>{setCompleted(true)}}  />
                            </div>: <div>
                        <label>False</label><br/>
                    <input type="checkbox"  placeholder="The great man  "onClick={()=>{setCompleted(!true)}} />
                        </div>}
                        
                       
                   
                    </div>
                </form>
                   
                    

            </div>
            </div>

        </div>

    )
}
export default Create;