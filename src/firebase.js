import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyASd_fa3P29KBEo3YNFeV3cGELGTIHBhsE",
  authDomain: "react-login-c6f69.firebaseapp.com",
  projectId: "react-login-c6f69",
  storageBucket: "react-login-c6f69.appspot.com",
  messagingSenderId: "516377040037",
  appId: "1:516377040037:web:23dd60dc1f1e9049d7e94c",
  measurementId: "G-H85LT6YYL2",
});
export const auth = app.auth();
export default app;
