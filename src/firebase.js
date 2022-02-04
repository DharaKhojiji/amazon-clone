// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAV5EznNpUdhZljiiY6kdW26hHxN2Q17r8",
  authDomain: "clone-addf3.firebaseapp.com",
  projectId: "clone-addf3",
  storageBucket: "clone-addf3.appspot.com",
  messagingSenderId: "247410725150",
  appId: "1:247410725150:web:05d1c3b6eeb135c573b90f",
  measurementId: "G-MRVVR1T75K",
};
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export  {db,auth}