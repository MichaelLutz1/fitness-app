import { FirebaseError } from "firebase/app";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../contexts/AuthContext";

function Login() {
  const context = UserAuth();
  const googleSignIn = context.googleSignIn;
  const signOut = context.signOutUser;
  return (
    <>
      <h1>Login Page</h1>
      <GoogleButton onClick={() => googleSignIn()} />
      <h1>{context.user ? context.user : null}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}

export default Login;
