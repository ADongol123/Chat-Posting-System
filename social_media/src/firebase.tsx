import firebase from "firebase"
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYNbwjbgHUFNQR9zeUHAXAEvdFO5HPBIw",
  authDomain: "chat-and-posting-application.firebaseapp.com",
  projectId: "chat-and-posting-application",
  storageBucket: "chat-and-posting-application.appspot.com",
  messagingSenderId: "287078019855",
  appId: "1:287078019855:web:da2bc262d011e43e89c47a",
  measurementId: "G-KLHRF921N6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()
export { auth, provider, storage };
export default db;