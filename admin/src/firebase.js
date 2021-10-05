import firebase from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBDtfOiBqwE6D-18cvqzazBOLz4WUznoBw",
    authDomain: "urban-views.firebaseapp.com",
    projectId: "urban-views",
    storageBucket: "urban-views.appspot.com",
    messagingSenderId: "144053057770",
    appId: "1:144053057770:web:205f6b1304bcca711aff93",
    measurementId: "G-1QMRQ67Z5K"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;