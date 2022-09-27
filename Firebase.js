import * as firebase from 'firebase/compat';
// import 'firebase/compat/auth';
import  "firebase/auth";
import  "firebase/firestore";
// import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDqTYiqLPE0pAtOWFJ1W9SIorXk9pP3IXY",
  authDomain: "signal-clone-react-nativ-29e39.firebaseapp.com",
  projectId: "signal-clone-react-nativ-29e39",
  storageBucket: "signal-clone-react-nativ-29e39.appspot.com",
  messagingSenderId: "575679259738",
  appId: "1:575679259738:web:53e7e5a77eb81001b4a463",
  measurementId: "G-4WDL58NT1P"
};


let app;
if(firebase.apps.length===0){


app=firebase.initializeApp(firebaseConfig)
}
else {
  app=firebase.app()
}

const db=app.firestore()
const auth=firebase.auth()
// const provider= new firebase.auth.GoogleAuthProvider();

export  {db,auth};