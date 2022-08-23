import firebase from "firebase";
import  'firebase/auth';  
import 'firebase/firestore'
import 'firebase/storage'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFbTO_GouyNbdSNsf3TWzKTPYRzFmzc6A",
    authDomain: "olxclone-b3621.firebaseapp.com",
    projectId: "olxclone-b3621",
    storageBucket: "olxclone-b3621.appspot.com",
    messagingSenderId: "829075357831",
    appId: "1:829075357831:web:b01f68a1a097d2a4097822",
    measurementId: "G-0GY9CXDF5G"
  };

 export default firebase.initializeApp(firebaseConfig)