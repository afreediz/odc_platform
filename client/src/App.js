import { useContext } from "react";
import { usercontext } from "./context/userContext";

function App() {
  const {user, setUser} = useContext(usercontext)
  setUser("hi")
  console.log(user);
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
