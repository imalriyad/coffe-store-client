import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, seUser] = useState(null);
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignin =(googleAuthProvier)=>{
    return signInWithPopup(auth,googleAuthProvier)
  }

  const logOut = () => {
    return signOut(auth);
  };

  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      seUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authentication = { creatUser, Signin,googleSignin, user, logOut, resetPass };
  return (
    <div>
      <AuthContext.Provider value={authentication}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
