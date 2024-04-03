import { useContext } from "react";
import { usercontext } from "./context/userContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Signup";
import Home from "./pages/user/Home";
import Login from "./pages/Login";
import Profile from "./pages/user/Profile";
import UserPrivate from "./components/UserPrivate";
import Navbar from "./components/Navbar";
import Listjobs from "./pages/user/Listjobs";
import HotelProfile from "./pages/hotel/HotelProfile";
import CreateJobs from "./pages/hotel/CreateJobs";


function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/listjobs" element={<Listjobs/>}/>
          <Route path="/createjob" element={<CreateJobs/>}/>
          <Route path="/hotel" element={<HotelProfile/>}>
            <Route path="/hotel/profile" element={<Home/>} />
          </Route>
          <Route path="/user" element={<UserPrivate />}>
            <Route path="/user" element={<Home/>} />
            <Route path="/user/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
