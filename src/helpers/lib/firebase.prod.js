import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// eslint-disable-next-line
import { seedDatabase } from "../../seed";
const config = {
  apiKey: "AIzaSyB9EET7ShHs_vFO-WuWmBxvOWrz4xQyM_U",
  authDomain: "netflix-64f8a.firebaseapp.com",
  databaseURL: "https://netflix-64f8a-default-rtdb.firebaseio.com",
  projectId: "netflix-64f8a",
  storageBucket: "netflix-64f8a.appspot.com",
  messagingSenderId: "421032609288",
  appId: "1:421032609288:web:0b82226df293e9a62c73bd",
  measurementId: "G-7047QXDGHC",
};


const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!

seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
// seedDatabase(firebase);

export { firebase };
