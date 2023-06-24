import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA82sYgQfgTmCzvLDpBwbLUMmmBofI20zw",
  authDomain: "chatapp-68af3.firebaseapp.com",
  projectId: "chatapp-68af3",
  storageBucket: "chatapp-68af3.appspot.com",
  messagingSenderId: "273180206696",
  appId: "1:273180206696:web:587fd5fa3d209f556a3ddd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
