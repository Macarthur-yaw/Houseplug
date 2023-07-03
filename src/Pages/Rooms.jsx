// import Navbar from "../Components/Navbar";

// import Navbar from "../Components/Navbar";
import BackgroundPicture from "../assets/Room1.jpg";
import { Picture3 } from "./Pictures";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter,faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGreaterThan,faLessThan } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
const Rooms = () => {
    return (
        
        <>
        <div>


<img  className="absolute h-screen w-full top-0 "
src={BackgroundPicture}  
alt="a background"/>

<div className="absolute inset-0 bg-black opacity-50"></div>
            

            <div className="absolute  z-20 text-white top-1/2 left-10 ">
<h5 className="text-xl leading-tight">EXPLORE</h5><h1 className="text-3xl leading-tight"> HousePlug</h1>
<div className="text-xl leading-tight">Worldclass Facilities that can help to give you a conducive environment.
</div>    
<div className=" p-2">
<button className="border-2 border-orange-400 font-bold p-2 rounded w-56 text-l  bg-orange-400">BOOK NOW</button>   </div>
</div>
        </div>
        <div className="relative mt-95 pt-10 lg:mt-40">

               <h1 className="text-l font-bold text-center text-blue-900 lg:text-xl"> All our room types including complementary breakfast.
               </h1> <div className="flex  flex-col gap-2  shadow-sm">   
     {Picture3.map((picture, index) => {
  return (
    <div key={index} className="flex flex-col items-center p-2   mx-auto">

    <img src={picture.img} alt="an " width="100%" height="50%"/>
    <br/>
    </div>
  );
})}


</div>

<div className="flex flex-col text-center p-2 text-blue-900" ><h1 className="text-blue-900 text-l font-bold">Testimonials</h1>
&quot; Calm,Serene, Retro- What a way to relax and enjoy&quot;
<br/>

Mr and Mrs Baxter, UK.
<div className=" flex flex-row gap-2 items-center justify-center">
<button className="border-2 p-1 w-8 bg-orange-200 rounded border-orange-200 text-white"><FontAwesomeIcon icon={faLessThan} /></button>
<button className="border-2 p-1 w-8 bg-orange-200 rounded border-orange-200 text-white"><FontAwesomeIcon icon={faGreaterThan}/></button>
</div>
</div>

<div>
        <Footer/>
</div>
        </div>
        </>    );
}
 
export default Rooms;