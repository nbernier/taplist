import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDphVewpM06PiOekI75YjBxzxhhyuUv1IA",
    authDomain: "taplist-7a2bc.firebaseapp.com",
    databaseURL: "https://taplist-7a2bc.firebaseio.com",
    projectId: "taplist-7a2bc",
    storageBucket: "taplist-7a2bc.appspot.com",
    messagingSenderId: "52282594692",
    appId: "1:52282594692:web:5ef7b67e0d2bdb9ad1b9d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase