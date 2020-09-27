import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDBD-aDf_zuJ3keJaAApGxNajQBbafpvBc",
    authDomain: "tinder-clone-e32d4.firebaseapp.com",
    databaseURL: "https://tinder-clone-e32d4.firebaseio.com",
    projectId: "tinder-clone-e32d4",
    storageBucket: "tinder-clone-e32d4.appspot.com",
    messagingSenderId: "88512968491",
    appId: "1:88512968491:web:1ab138e646ffd5623fb76e",
    measurementId: "G-J70R25R0M9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();