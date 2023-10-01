// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqB2iIU48a7US93O0hif4TqthPxd4kowA",
  authDomain: "user-authentication-da508.firebaseapp.com",
  projectId: "user-authentication-da508",
  storageBucket: "user-authentication-da508.appspot.com",
  messagingSenderId: "295525598006",
  appId: "1:295525598006:web:50e891d497c1d133be2997",
  measurementId: "G-6MGSCH3GNV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;