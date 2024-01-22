import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU78zF8vbiqXjvkjEpem4AI9_jni6NR4Q",
  authDomain: "todo-project-340da.firebaseapp.com",
  projectId: "todo-project-340da",
  storageBucket: "todo-project-340da.appspot.com",
  messagingSenderId: "203131044986",
  appId: "1:203131044986:web:61d2c3e89e0e4da91aa7c3",
  measurementId: "G-NQTCTX6NJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};