import { useContext } from "react";
import { usercontext } from "./context/userContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Signup";
import Home from "./pages/user/Home";
import Login from "./pages/Login";
import Profile from "./pages/user/Profile";
import HotelProfileProfile from "./pages/hotel/HotelProfile"
import UserPrivate from "./components/UserPrivate";
import HotelPrivate from "./components/HotelPrivate";
import AdminPrivate from "./components/AdminPrivate";
import Navbar from "./components/Navbar";
import Listjobs from "./pages/user/Listjobs";
import HotelProfile from "./pages/hotel/HotelProfile";
import CreateJobs from "./pages/hotel/CreateJobs";


function App() {
  const { user, setUser } = useContext(usercontext)
  setUser("hi")
  console.log(user);
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/listjobs" element={<Listjobs/>}/>
          <Route path="/createjob" element={<CreateJobs/>}/>
          <Route path="/hotelprofile" element={<HotelProfile/>}/>
            <Route path="/home" element={<Home/>} />
          <Route path="/" element={<UserPrivate />}>
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
