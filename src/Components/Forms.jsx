const Forms = () => {
    return ( 
        <div>

           <div >
            
<form className="flex flex-col gap-2  w-96 h-80 lg:w-96 items-center">
    Name
    <input type="text" className="border-2 h-8 w-80 rounded " />
 Email
    <input type="email" className="border-2 h-8 w-80 rounded"/>


    Message
    <textarea className="border-2 h-20 w-80"></textarea>

    <button className="border-2 rounded bg-orange-300 border-orange-300 w-24 p-2 text-white">Submit</button>
</form>

            </div> 
        </div>
     );
}
 
export default Forms;