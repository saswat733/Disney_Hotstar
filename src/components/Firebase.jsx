import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore,collection,getDocs, getDoc } from 'firebase/firestore'; // Import getFirestore instead of accessing firestore directly

const firebaseConfig = {
  apiKey: "AIzaSyBNrSQXCCYiI0Ife_HH4e6-NGSjHh8FKUw",
  authDomain: "disney-hotstar-90563.firebaseapp.com",
  projectId: "disney-hotstar-90563",
  storageBucket: "disney-hotstar-90563.appspot.com",
  messagingSenderId: "1058322026530",
  appId: "1:1058322026530:web:89c775d948c087a0e8ba7b",
  measurementId: "G-EPMMRJM0M1"
};

const app=initializeApp(firebaseConfig)
const auth=getAuth(app)
const db = getFirestore(app);

const provider=new GoogleAuthProvider();
export {auth,provider}

export default db;