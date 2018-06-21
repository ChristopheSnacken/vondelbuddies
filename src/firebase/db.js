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


export const updateUser = (id, user, key=null, newValue=null, bio='This is my super cool bio', img=generateIMG(), parc='Vondelpark', phone='0625273211') => {
  // user[key] = newValue;
  console.log(user);
  
  db.ref(`users/${id}`).update({
    ...user,
    bio,
    img,
    parc,
    phone
  })
}