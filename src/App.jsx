import { useState } from "react";
import { fbApp } from "./firebase";

function App() {
  const [info, setInfo] = useState({});
  console.log(fbApp);
  return (
    <div>
      <form
        onSubmit={(e) => {
          setInfo((i) => {
            return { ...i, email: e.target.email.value };
          });
          setInfo((i) => {
            return { ...i, password: e.target.password.value };
          });
        }}
      >
        Email
        <input type="text" name="email" />
        Password
        <input type="text" name="password" />
        <input type="submit" />
      </form>
      <div>
        {info.email}
        {info.password}
      </div>
    </div>
  );
}

export default App;
