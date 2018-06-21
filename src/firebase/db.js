import { db } from './firebase';



// USER API

export const doCreateUser = (id, username, email, bio, img, park, phone ) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    id,
    bio,
    img,
    park,
    phone
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');


export const updateUser = (id, user, key=null, newValue=null) => {
  // user[key] = newValue;
  console.log(user);
  
  db.ref(`users/${id}`).update({
    ...user,
  })
}