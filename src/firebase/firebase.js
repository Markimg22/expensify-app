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

/**
 * child_remove
 */
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

/**
 * child_changed
 */
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

/**
 * child_added
 */
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

/**
 * Conversão objeto firebase para 'array'
 */
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }, (error) => {
//   console.log('error:', error);
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key, 
//       ...childSnapshot.val()
//     });
//   });
// })
// .catch((error) => {
//   console.log('error:', error);
// });

// database.ref('expenses').push({
//   description: 'abc',
//   note: '12',
//   createdAt: 21231913123912,
//   amount: 123123
// });

/**
 * Acessar e manipular dados num 'array' no firebase
 */
// database.ref('notes/-MMYhdL95qH6iojDDmv4').update({
//   title: 'Hello World'
// });

// database.ref('notes/-MMYhdL95qH6iojDDmv4').remove();

/**
 * Trabalhando com múltiplos objetos 'array' no firebase
 */
// database.ref('notes').push({
//   title: 'Estágio',
//   body: 'MTI.'
// });

// const firebaseNotes = {
//   notes: {
//     awe: {
//       title: 'First Note',
//       body: 'This is my note'
//     },
//     abc: {
//       title: 'Second Note',
//       body: 'This is my other note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is my note'
// }, {
//   id: '24',
//   title: 'Second Note',
//   body: 'This is my other note'
// }];

// database.ref('notes').set(notes);

/**
 * Verificando, analisando e pegando valores
 */
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (error) => {
//   console.log('error:', error);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (error) => {
//   console.log('Error with data fetching:', error);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(31);
// }, 10000);

// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log('Successly Fetich:', val);
// })
// .catch((error) => {
//   console.log('error:', error);
// });

/**
 * Adicionar, alterar e atualizar valores
 */
// database.ref()
// .set({
//   name: 'Marcos Campos',
//   age: 19,
//   stressLevel: 0,
//   job: {
//     title: 'Web Developer',
//     company: 'MTI'
//   },
//   location: {
//     city: 'Cuiabá',
//     country: 'Brazil'
//   }
// })
// .then(() => {
//   console.log('Data is saved');
// })
// .catch((error) => {
//   console.log('error:', error);
// });

// database.ref()
// .update({
//   stressLevel: 9,
//   'job/company': 'Google',
//   'location/city': 'Vale do Silício'
// })
// .then(() => {
//   console.log('Successly Update');
// })
// .catch((error) => {
//   console.log('error:', error);
// });
