import { useContext } from "react";
import { usercontext } from "./context/userContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const { user, setUser } = useContext(usercontext)
  setUser("hi")
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
