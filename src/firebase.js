import { initializeApp } from 'firebase/app';
import { getFirestore,query, getDocs,collection } from 'firebase/firestore/lite';
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB4nLdbMSZUmFH6IDQiEw8697Es48BhSC4",
    authDomain: "disney-clone-937fa.firebaseapp.com",
    projectId: "disney-clone-937fa",
    storageBucket: "disney-clone-937fa.appspot.com",
    messagingSenderId: "557892027954",
    appId: "1:557892027954:web:72ce9d6a2094080936de2b",
    measurementId: "G-TVLWEK15E3"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(); // for Google authentication
const storage= getStorage();

export {db,auth,provider,storage,firebaseApp,signInWithPopup,onAuthStateChanged,signOut,query, getDocs,collection};

