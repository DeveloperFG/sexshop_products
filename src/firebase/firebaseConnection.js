import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'




let firebaseConfig = {
    apiKey: "AIzaSyBTcb6wHwOz3JyCwOe1u6oJIWnjrpqb3tA",
    authDomain: "iperium-99943.firebaseapp.com",
    projectId: "iperium-99943",
    storageBucket: "iperium-99943.appspot.com",
    messagingSenderId: "875905158232",
    appId: "1:875905158232:web:4f4b62a3f174fd7abe0e2d",
    measurementId: "G-295N5MDM56"
};

// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const storage = firebase.storage();

export { storage, firebase as default };