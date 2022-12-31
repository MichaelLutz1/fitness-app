import { useEffect, useContext, createContext, useState } from "react";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (curUser) => {
      setUser(curUser);
    });
  }, []);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((value) => {
      setUser(value.user);
    });
  };

  const signOutUser = () => {
    signOut(auth).then(() => setUser());
  };

  return (
    <AuthContext.Provider
      value={{
        googleSignIn: googleSignIn,
        user: user,
        signOutUser: signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
