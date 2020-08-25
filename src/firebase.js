import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyCxUUXsXDqyzMSbO6WtESfEjvMrCYrkQs4",
    authDomain: "impl-intern.firebaseapp.com",
    databaseURL: "https://impl-intern.firebaseio.com",
    projectId: "impl-intern",
    storageBucket: "impl-intern.appspot.com",
    messagingSenderId: "732744868364",
    appId: "1:732744868364:web:ac792833ffadaae5588429",
    measurementId: "G-TTJKQTT7DB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;