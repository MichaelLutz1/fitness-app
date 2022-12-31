import { FirebaseError } from "firebase/app";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../contexts/AuthContext";

function Login() {
  const context = UserAuth();
  const googleSignIn = context.googleSignIn;
  const signOut = context.signOutUser;
  const userInfo = (user) => {
    if (user) {
      return <h1>Hello {user}</h1>;
    } else {
    }
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"100vh"}}>
      <div>
      <h1 className="text-center">Login with Google</h1>
      <GoogleButton className="mx-auto" onClick={() => googleSignIn()} />
      </div>
    </div>
  );
}

export default Login;
