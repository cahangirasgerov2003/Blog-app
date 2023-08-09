import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOmdzecDxo1GXRer1HJl6YpcIgIJh4DYc",
  authDomain: "react-blog-app-f767b.firebaseapp.com",
  databaseURL: "https://react-blog-app-f767b-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-f767b",
  storageBucket: "react-blog-app-f767b.appspot.com",
  messagingSenderId: "579245759251",
  appId: "1:579245759251:web:7ac1ffef6ff0400bcbd8e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const blogRef = ref(database);

set(blogRef, {
  title: "My blog 2",
  desc: "My desc 2",
  author: [
    {
      name: "Cahangir",
      surName: "Asgerli",
    },
    {
      name: "Kamran",
      surName: "Asgerli",
    },
  ],
});
