import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhZz3PV_TzC2eu-ZnuuZv0wyk0dpVWreQ",
    authDomain: "vue3-invoice-90542.firebaseapp.com",
    projectId: "vue3-invoice-90542",
    storageBucket: "vue3-invoice-90542.appspot.com",
    messagingSenderId: "465475839121",
    appId: "1:465475839121:web:10d5532309a37a52b24b30",
    measurementId: "G-NG7MD7W757"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();
  