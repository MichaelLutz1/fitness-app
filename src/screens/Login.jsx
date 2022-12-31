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
    <>
      <h1>Login Page</h1>
      <GoogleButton onClick={() => googleSignIn()} />
      {context.user ? (
        <>
          <h1>Hello {context.user.displayName}</h1>
          <p>User id: {context.user.uid}</p>
        </>
      ) : null}
    </>
  );
}

export default Login;
