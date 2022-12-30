import { FirebaseError } from "firebase/app";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../contexts/AuthContext";

function Login() {
  const { googleSignIn } = UserAuth();
  return (
    <>
      <h1>Login Page</h1>
      <GoogleButton onClick={() => googleSignIn()} />
    </>
  );
}

export default Login;
