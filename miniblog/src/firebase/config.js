// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO1QPld_yChdVIk0kSidi7LLObg5tlQxQ",
  authDomain: "miniblog-3dd5e.firebaseapp.com",
  projectId: "miniblog-3dd5e",
  storageBucket: "miniblog-3dd5e.appspot.com",
  messagingSenderId: "767137422914",
  appId: "1:767137422914:web:1496feb58862e4925797db"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };