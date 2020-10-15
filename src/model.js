import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCi-aeb9ltGY1ziMl8-lPyA2MaU2i5iOaE',
  authDomain: 'restaurante-4c1bc.firebaseapp.com',
  databaseURL: 'https://restaurante-4c1bc.firebaseio.com',
  projectId: 'restaurante-4c1bc',
  storageBucket: 'restaurante-4c1bc.appspot.com',
  messagingSenderId: '865040772165',
  appId: '1:865040772165:web:8bda4f7e4c3005c6e8872c',
  measurementId: 'G-TDQ5RJQDW6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const model = {
  createDocument(name, opinion) {
    db.collection('Comments')
      .doc(`${opinion}`)
      .set({
        name: name,
        opinion: opinion,
      })
      .then(function () {
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  },
};

export { db, model };
