// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5rTiXncQq1BaAA1Z6HNMFl6eNcLli8IM",
  authDomain: "greensteamshopt.firebaseapp.com",
  projectId: "greensteamshopt",
  storageBucket: "greensteamshopt.appspot.com",
  messagingSenderId: "857953402312",
  appId: "1:857953402312:web:a52915849e090c7f4694fd",
  measurementId: "G-ZDVDB8JJFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;