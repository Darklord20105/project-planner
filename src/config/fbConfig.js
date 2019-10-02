// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtmbcuYe_S_G9wS_eSGhOmnB5KLqbX7m8",
  authDomain: "project-planner-820d6.firebaseapp.com",
  databaseURL: "https://project-planner-820d6.firebaseio.com",
  projectId: "project-planner-820d6",
  storageBucket: "",
  messagingSenderId: "928621777111",
  appId: "1:928621777111:web:16fc236d152f0a69c2a092",
  measurementId: "G-D6YMZZH5T2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
