// ACTIONS CREATER
import { firebase, googleAuthProvider } from "../firebase/configFirebase";

export const login = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const loginAction = (uid) => {
  return {
    type: "LOGIN",
    uid,
  };
};

export const logout = () => {
  return firebase.auth().signOut();
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
