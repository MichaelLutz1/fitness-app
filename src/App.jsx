import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Workout from "./screens/Workout";
import Exercise from "./screens/Exercise";
import Login from "./screens/Login";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Workout"}>Workout Page</Link>
          </li>
          <li>
            <Link to={"/Exercise"}>Exercise Page</Link>
          </li>
          <li>
            <Link to={"/Login"}>Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
