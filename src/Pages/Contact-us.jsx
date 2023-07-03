// import Navbar from "../Components/Navbar";

// import Navbar from "../Components/Navbar";
import BackgroundPicture from "../assets/Room1.jpg";
// import { Picture3 } from "./Pictures";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter,faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGreaterThan,faLessThan } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
const Rooms = () => {
    return (
        
        <>
        <div>



<div className="absolute inset-0 bg-black opacity-50"></div>
            

          

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