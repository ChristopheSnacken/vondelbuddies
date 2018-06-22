import { db } from './firebase';


// USER API

export const doCreateUser = (id, name, email, bio, img, park, phone ) =>
  db.ref(`users/${id}`).set({
    name,
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

  db.ref(`users/${id}`).update({
    ...user,
  })
}
