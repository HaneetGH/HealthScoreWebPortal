import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyB1zkafcglGkRlsds47H10CIwSsKtnjsqE",
  authDomain: "healthscore-4fcdf.firebaseapp.com",
  databaseURL: "https://healthscore-4fcdf-default-rtdb.firebaseio.com",
  projectId: "healthscore-4fcdf",
  storageBucket: "healthscore-4fcdf.appspot.com",
  messagingSenderId: "959287164059",
  appId: "1:959287164059:android:99fbe625426c70e8559a3e",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

