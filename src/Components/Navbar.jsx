import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div  className="flex font-bold flex-row text-white text-l p-2 text-bold    items-center border-2 ">
<h3 className="z-10">HousePlug</h3>

            <ul className="list-none w-full z-10  w-full  flex p-4   flex-row gap-10  justify-end ">
             
                <li>
                   <Link to="Home"> Home</Link> 
                   </li>
<li ><Link to="Facilities">Facilities</Link></li>
<li ><Link to="Rooms">Rooms</Link> </li>
<li ><Link to="About">Contact us</Link></li>
                </ul> 
        </div>
    );
}
 
export default Navbar;