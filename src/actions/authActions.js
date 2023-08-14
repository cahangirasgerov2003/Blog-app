// ACTIONS CREATER
import { firebase, googleAuthProvider } from "../firebase/configFirebase";

export const login = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const logout = () => {
  return firebase.auth().signOut();
};
