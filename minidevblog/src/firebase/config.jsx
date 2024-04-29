import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyDF5rfIAkQSn0uc9E06hiH5-y-npIaOOQw",
    authDomain: "minidevblogdaniel.firebaseapp.com",
    projectId: "minidevblogdaniel",
    storageBucket: "minidevblogdaniel.appspot.com",
    messagingSenderId: "365899167916",
    appId: "1:365899167916:web:73c8c8e394d118d13f8709",
    measurementId: "G-E8DLRVLQ1P"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics, firebaseConfig };
