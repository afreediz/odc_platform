import { useContext } from "react";
import { usercontext } from "./context/userContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Signup";
import Home from "./pages/user/Home";
import Login from "./pages/Login";
import UserPrivate from "./context/UserPrivate";
import HotelPrivate from "./context/HotelPrivate";
import AdminPrivate from "./context/AdminPrivate";

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
          <Route element={<UserPrivate />}>
            <Route path="/user" element />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
