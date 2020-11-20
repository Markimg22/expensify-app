import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD-j7_nqJA_bD3NFCrN9IKzeHVkdx6RJ3I',
  authDomain: 'expensify-688e2.firebaseapp.com',
  databaseURL: 'https://expensify-688e2.firebaseio.com',
  projectId: 'expensify-688e2',
  storageBucket: 'expensify-688e2.appspot.com',
  messagingSenderId: '478108633576',
  appId: '1:478108633576:web:c514a7b9e3e20d8118fc5d'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };