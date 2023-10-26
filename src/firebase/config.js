import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDXNfpgpAt5ilfCsNzV2Wxkehs905Tk3ZI",
    authDomain: "olx-clone-e9435.firebaseapp.com",
    projectId: "olx-clone-e9435",
    storageBucket: "olx-clone-e9435.appspot.com",
    messagingSenderId: "991424558295",
    appId: "1:991424558295:web:12dfe5b0d2656ad09b2c92",
    measurementId: "G-GX1GJ5CJFM"
  };

export default  firebase.initializeApp(firebaseConfig);


