import { useState } from "react";

const Forms = () => {
    const[name,setName]=useState("");
    const[text,setText]=useState("");
    const[email,setEmail]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  
    return ( 
        <div>

           <div >
            
<form onSubmit={handleSubmit} className="flex flex-col gap-2  w-96 h-80 lg:w-96 items-center">
    Name
    <input type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className="border-2 h-8 w-80 rounded " />
 Email
    <input type="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    className="border-2 h-8 w-80 rounded"/>


    Message
    <textarea
    value={text}
    onChange={(e)=>setText(e.target.value)}
    className="border-2 h-20 w-80"></textarea>

    <button className="border-2 rounded bg-orange-300 border-orange-300 w-24 p-2 text-white">Submit</button>
</form>

            </div> 
        </div>
     );
}
 
export default Forms;