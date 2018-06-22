import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB5gz6oORnLjX23yzAx-WhznUF6Kqxh_f0",
    authDomain: "vondelbuddies.firebaseapp.com",
    databaseURL: "https://vondelbuddies.firebaseio.com",
    projectId: "vondelbuddies",
    storageBucket: "gs://vondelbuddies.appspot.com",
    messagingSenderId: "57423944320"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  db,
  auth,
  storage
};
