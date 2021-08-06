import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBgepG3gXvL9WERNF32olsDf7oyTchgojY",
    authDomain: "login-system-in-react-9c9a3.firebaseapp.com",
    projectId: "login-system-in-react-9c9a3",
    storageBucket: "login-system-in-react-9c9a3.appspot.com",
    messagingSenderId: "32838653657",
    appId: "1:32838653657:web:8987623801e166bf9b50c8"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;