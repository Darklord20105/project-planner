import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
