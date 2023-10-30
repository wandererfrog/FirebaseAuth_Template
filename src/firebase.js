// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEd2r1mRplG5ycvtgt0rrwqsTVB1OfGQo",
  authDomain: "hoopstat-b6e11.firebaseapp.com",
  projectId: "hoopstat-b6e11",
  storageBucket: "hoopstat-b6e11.appspot.com",
  messagingSenderId: "827358053781",
  appId: "1:827358053781:web:cf39d9772f39f5c02a229c",
  measurementId: "G-PCX098TB5S"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

export const auth = getAuth(FirebaseApp);

export default FirebaseApp;