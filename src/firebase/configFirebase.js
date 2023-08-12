import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage

const firebaseConfig = {
  apiKey: "AIzaSyBOmdzecDxo1GXRer1HJl6YpcIgIJh4DYc",
  authDomain: "react-blog-app-f767b.firebaseapp.com",
  databaseURL: "https://react-blog-app-f767b-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-f767b",
  storageBucket: "react-blog-app-f767b.appspot.com",
  messagingSenderId: "579245759251",
  appId: "1:579245759251:web:7ac1ffef6ff0400bcbd8e6",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
