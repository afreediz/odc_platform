import { useContext } from "react";
import { usercontext } from "./context/userContext";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Signup from "./pages/Signup";
import Home from "./pages/user/Home";
import Login from "./pages/Login";
import Profile from "./pages/user/Profile";
import UserPrivate from "./components/UserPrivate";
import Navbar from "./components/Navbar";
import Listjobs from "./pages/user/Listjobs";
import HotelProfile from "./pages/hotel/HotelProfile";
import CreateJobs from "./pages/hotel/CreateJobs";
import HotelPrivate from './components/HotelPrivate'
import HotelHome from "./pages/hotel/HotelHome";
import Dashboard from "./pages/admin/Dashboard";
import JobsDescription from "./pages/user/JobsDescription";
import JobDescHotelSide from "./pages/hotel/JobDescHotelSide";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/hotel" element={<HotelPrivate />}>
            <Route path="/hotel" element={<HotelHome/>} />
            <Route path="/hotel/profile" element={<HotelProfile/>} />
            <Route path="/hotel/createjob" element={<CreateJobs/>}/>
            <Route path="/hotel/jobdesc" element={<JobsDescription/>}/>
          </Route>
          <Route path="/user" element={<UserPrivate />}>
            <Route path="/user" element={<Home/>} />
            <Route path="/user/profile" element={<Profile/>} />
            <Route path="/user/listjobs" element={<Listjobs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
