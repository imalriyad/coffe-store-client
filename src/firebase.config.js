import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDdJ0z2XkluqvkjHkQKH-LkYC90yJJsLs",
  authDomain: "coffe-store-7a720.firebaseapp.com",
  projectId: "coffe-store-7a720",
  storageBucket: "coffe-store-7a720.appspot.com",
  messagingSenderId: "34567093351",
  appId: "1:34567093351:web:7dc554e7c4182ed20228c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
