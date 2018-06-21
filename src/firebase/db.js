import { db } from './firebase';

const generateIMG = () => Math.floor(Math.random() * 4)

// USER API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    id
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const updateUser = (id, age, level, gender, sports, bio='This is my super cool bio', img=generateIMG(), parc='Vondelpark', phone='0625273211') =>
  db.ref(`users/${id}`).update({
   age,
   level,
   gender,
   sports,
   bio,
   img,
   parc,
   phone
  });