
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCApJNAQxXF-mFn3x3k1ljlvRdvhbCQPaA",
    authDomain: "mytube-397d1.firebaseapp.com",
    projectId: "mytube-397d1",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);