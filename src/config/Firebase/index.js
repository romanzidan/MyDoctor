// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBugRpMxHzkCuvW69YEZPIHMUECEQN5QFc',
  authDomain: 'my-doctor-75ea0.firebaseapp.com',
  projectId: 'my-doctor-75ea0',
  storageBucket: 'my-doctor-75ea0.appspot.com',
  messagingSenderId: '718971659739',
  appId: '1:718971659739:web:8580c9ea4d206bf2a573fe',
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export default Firebase;
