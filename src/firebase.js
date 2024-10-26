import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBRIHS9Yurm7O6SRBvKEV9oXryYtVEXMyM",
    authDomain: "reactfirebase-6136d.firebaseapp.com",
    projectId: "reactfirebase-6136d",
    storageBucket: "reactfirebase-6136d.appspot.com",
    messagingSenderId: "792182647513",
    appId: "1:792182647513:web:33ac7261a27828a3fcacc8",
    measurementId: "G-HQYL1TTVJY"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
