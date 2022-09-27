import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDqTYiqLPE0pAtOWFJ1W9SIorXk9pP3IXY",
  authDomain: "signal-clone-react-nativ-29e39.firebaseapp.com",
  projectId: "signal-clone-react-nativ-29e39",
  storageBucket: "signal-clone-react-nativ-29e39.appspot.com",
  messagingSenderId: "575679259738",
  appId: "1:575679259738:web:53e7e5a77eb81001b4a463",
  measurementId: "G-4WDL58NT1P"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider();

export  {db,auth,provider};