import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

  var firebaseConfig = {
    apiKey: "AIzaSyDd1Uy4b0fsly9x6KhclbP2wJp_70gdd4o",
    authDomain: "cycle-lending-app.firebaseapp.com",
    projectId: "cycle-lending-app",
    storageBucket: "cycle-lending-app.appspot.com",
    messagingSenderId: "547084351289",
    appId: "1:547084351289:web:5efa9ca91b0033b4e4dae8"
  };
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
