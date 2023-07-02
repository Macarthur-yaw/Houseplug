import Navbar from "../Components/Navbar";
import BackgroundPicture from "../assets/Background.jpg";
import Pictures from "./Pictures";

const Homepage = () => {
    return (
        
        <>
        <div>


<img  className="absolute h-screen w-full top-0 "
src={BackgroundPicture}  
alt="a background"/>

<div className="absolute inset-0 bg-black opacity-50"></div>
            

            <div className="absolute  z-20 text-white top-1/2 left-10 ">
<h5 className="text-xl leading-tight">WELCOME TO</h5><h1 className="text-3xl leading-tight"> HousePlug</h1>
<div className="text-xl leading-tight">Book your stay and enjoy Luxury redefined at the most affordable rates.
</div>    
<div className=" p-2">
<button className="border-2 border-orange-400 font-bold p-2 rounded w-56 text-l  bg-orange-400">BOOK NOW</button>   </div>
</div>
        </div>
        <div className="relative mt-95">

               <h1 className="text-l font-bold text-center text-blue-900"> All our room types including complementary breakfast.
               </h1> <div className="flex  flex-col gap-2  border-2">   
     {Pictures.map((picture, index) => {
  return (
    <div key={index} className="flex flex-row p-2   mx-auto">

        <div className="flex flex-col text-left gap-2 text-blue-900 p-4">
   <h1 className="text-l font-bold  p-2"> {picture.title}
   </h1>
  
    {picture.content}

    <br/>
    <button className="border-2 w-32 p-1 border-orange-400 rounded bg-orange-400 text-white">Explore</button>
</div>
    <img src={picture.img} alt="an " width="50%" height="50%"/>
    <br/>
    </div>
  );
})}


</div>

<div className="flex flex-col text-center p-2 text-blue-900" ><h1 className="text-blue-900 text-l font-bold">Testimonials</h1>
&quot; Calm,Serene, Retro- What a way to relax and enjoy&quot;
<br/>

Mr and Mrs Baxter, UK.

</div>

<div id="footer" className="flex  flex-row border-2 gap-6 p-4 items-center justify-between font-semibold text-white border-blue-900 p-2 bg-blue-900">
        <div id="list1" className="flex flex-col gap-2 items-center">

               <h1> HOSTELPLUG</h1>
               407 Tarkwa Road,
               +233 599 293 572
               arthurkevin1260@gmail.com
        </div>

        <div id="list2" className="flex flex-col text-center items-center">
                <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Condition</li>
                </ul>
        </div>

        <div id="list3" className="flex flex-col text-center items-center">
        <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                </ul>

        </div>

        <div id="list4" className="flex flex-col items-center gap-2 ">
                Subscribe to our newsletter

         <span className="border-2 border-orange-300 flex  flex-row">       <input type="text" placeholder="Email address" className="border-none bg-transparent placeholder-white text-center"/>
     <button className="bg-orange-300 text-center ">OK</button>
     </span>     </div>
</div>
        </div>
        </>    );
}
 
export default Homepage;