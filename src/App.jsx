import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Workout from "./screens/Workout";
import Exercise from "./screens/Exercise";
import Login from "./screens/Login";
import { UserAuth } from "./contexts/AuthContext";

function App() {
  const context = UserAuth();
  console.log(context);
  function loggedIn(e) {
    return e ? true : false;
  }
  return (
    <>
      {context.user ? (
        <>
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
              <li>
                <Link to={"/"} onClick={() => context.signOutUser()}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : null}

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route
          path="/"
          element={loggedIn(context.user) ? <Home /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
