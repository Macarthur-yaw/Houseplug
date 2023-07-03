import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        
<div id="footer" className="flex  flex-row border-2 gap-6  p-4 items-center justify-evenly font-semibold text-white border-blue-900 p-2 bg-blue-900">
        <div id="list1" className="flex text-center flex-col  items-center">

               <h1> HOSTELPLUG</h1>
               
               407 Tarkwa Road,
               <br/>
               +233 599 293 572
               <br/>
               arthurkevin1260@gmail.com
        </div>

        <div id="list2" className="flex flex-col  items-center">
                <ul className="list-none">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Condition</li>
                </ul>
        </div>

        <div id="list3" className="flex flex-col  items-center">
        <ul className="list-none">
                        <li><FontAwesomeIcon icon={faFacebook}/> Facebook</li>
                        <li><FontAwesomeIcon icon={faTwitter}/> Twitter</li>
                        <li><FontAwesomeIcon icon={faInstagram}/> Instagram</li>
                </ul>

        </div>

        <div id="list4" className="flex flex-col items-center gap-2 ">
                Subscribe to our newsletter

         <span className="border-2 border-orange-300 flex  flex-row">       <input type="text" placeholder="Email address" className="border-none bg-transparent placeholder-white text-center"/>
     <button className="bg-orange-300 text-center lg:p-2">OK</button>
     </span>     </div>
</div>
      );
}
 
export default Footer;