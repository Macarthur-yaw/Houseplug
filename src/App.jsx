import Navbar from "./Components/Navbar"
import { Route,Routes } from "react-router-dom"
import Contact from "./Pages/Contact-us"
import Facilities from "./Pages/Facilities"
import Homepage from "./Pages/Homepage"
import Rooms from "./Pages/Rooms"
// import BackgroundPicture from "./assets/Background.jpg";
function App() {

  return (
    <>
      

<div>
    
    <Navbar/>
      
      <Routes>
        <Route path="Home" element={<Homepage/>}/>
        <Route path="Facilities" element={<Facilities/>}/>
<Route path="Rooms" element={<Rooms/>}/>
<Route path="About" element={<Contact/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
