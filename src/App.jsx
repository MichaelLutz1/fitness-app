import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Workout from "./screens/Workout";
import Exercise from "./screens/Exercise";
import Login from "./screens/Login";
import { UserAuth } from "./contexts/AuthContext";

function App() {
  const context = UserAuth();
  console.log(context);
  return (
    <>
      {context.user ? (
        <nav>
          <ul>
            <li>
              <Link to={"/Home"}>Home</Link>
            </li>
            <li>
              <Link to={"/Workout"}>Workout Page</Link>
            </li>
            <li>
              <Link to={"/Exercise"}>Exercise Page</Link>
            </li>
          </ul>
        </nav>
      ) : null}

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
