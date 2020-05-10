import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "${{ secrets.APIKey }}",
    authDomain: "taplist-7a2bc.firebaseapp.com",
    databaseURL: "https://taplist-7a2bc.firebaseio.com",
    projectId: "taplist-7a2bc",
    storageBucket: "taplist-7a2bc.appspot.com",
    messagingSenderId: "52282594692",
    appId: "${{ secrets.APPId }}"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase