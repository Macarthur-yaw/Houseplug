// import Navbar from "../Components/Navbar";

// import Navbar from "../Components/Navbar";
// import BackgroundPicture from "../assets/Room1.jpg";
// import { Picture3 } from "./Pictures";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter,faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGreaterThan,faLessThan } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Forms from "../Components/Forms";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Rooms = () => {
    return (
        
        <>
        <div className="flex flex-col items-center">


<div className="bg-blue-900 w-full h-36 absolute top-0 ">
<h1 className="text-l relative mt-15 lg:mt-5 font-bold text-white text-center">   CONTACT-US</h1> 
</div>

<div className="flex flex-col text-blue-900 relative mt-10  items-center p-2">
  <h1 className="text-blue-900 text-xl  font-semibold w-full"> WE ARE HERE FOR YOU.</h1> 
    At Luxury Hotels, we take our customers seriouslt. Do 
    you have any enquiries,complaints or request.
    please forward it to your support desk and we will get back to you as soon as possible.

<div className="border-2 p-1 w-full gap-2 flex flex-row  justify-center">   
 <div className="flex flex-col text-semibold text-l">
      497 Evergreen Rd. Roseville,
      <br/>
      CA 95673

      <button className="font-bold text-blue-900">View Map <FontAwesomeIcon icon={faArrowRight}/>
      </button>
      Phone : +233 599 293 572
      <br/>
      Email: arthurkevin1260@gmail.com  
    </div>

        <Forms/>
    </div>


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

<div className="w-full">
        <Footer/>
</div>
        </div>
        </>    );
}
 
export default Rooms;