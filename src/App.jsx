import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./screens/home/Home";
import Workout from "./screens/workout/Workout";
import Exercise from "./screens/exercise/Exercise";
import Login from "./screens/login/Login";
import { UserAuth } from "./contexts/AuthContext";

function App() {
  const context = UserAuth();
  console.log(context);
  
  return (
    <>
      {context.user ? (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">wii fit plus</div>
                <Link className="mx-3" to={"/Home"}>Home</Link>
                <Link className="mx-3" to={"/Workout"}>Workout Page</Link>
                <Link className="mx-3" to={"/Exercise"}>Exercise Page</Link>
                <Link className="mx-3" to={"/"} onClick={() => context.signOutUser()}>
                  Sign Out
                </Link>
          </nav>
        </>
      ) : null}
    
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route
          path="/"
          element={context.user ? <Home /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
