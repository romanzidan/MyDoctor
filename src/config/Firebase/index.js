import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyD5COFoCMeo2XbZ4lXtOXzi7Sp0YUEA49Y',
  authDomain: 'my-doctor-app-466d1.firebaseapp.com',
  databaseURL:
    'https://my-doctor-app-466d1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'my-doctor-app-466d1',
  storageBucket: 'my-doctor-app-466d1.appspot.com',
  messagingSenderId: '230900519561',
  appId: '1:230900519561:web:7dcdc0561e277d20496c58',
});

const Firebase = firebase;

export {Firebase};
