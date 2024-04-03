import { useContext } from "react";
import { usercontext } from "./context/userContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Signup";
import Home from "./pages/user/Home";
import Login from "./pages/Login";
import Profile from "./pages/user/Profile";
import UserPrivate from "./components/UserPrivate";
import HotelPrivate from "./components/HotelPrivate";
import AdminPrivate from "./components/AdminPrivate";

function App() {
  const { user, setUser } = useContext(usercontext)
  setUser("hi")
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<UserPrivate />}>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
