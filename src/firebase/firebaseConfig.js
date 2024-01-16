// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDMASC39EsKv0A6MBZq24mt6hzzmZwV_E",
  authDomain: "comfy-7fd8e.firebaseapp.com",
  projectId: "comfy-7fd8e",
  storageBucket: "comfy-7fd8e.appspot.com",
  messagingSenderId: "1072485681035",
  appId: "1:1072485681035:web:7bb569752221730838118e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
