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

               <h1 className="text-l font-bold text-center"> All our room types including complementary breakfast.
               </h1> <div className="flex flex-col gap-2  border-2">   
     {Pictures.map((picture, index) => {
  return (
    <div key={index} className="flex flex-row">

        <div className="flex flex-col">
   <h1 className="text-l font-bold p-2"> {picture.title}
   </h1>
  
    {picture.content}
</div>
    <img src={picture.img} alt="an "/>
    <br/>
    </div>
  );
})}


</div>
        </div>
        </>    );
}
 
export default Homepage;