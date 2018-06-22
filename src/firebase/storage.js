import { storage } from './firebase';

// USER API

export const doCreateNewImage = (id) => {
  const storageRef = storage.ref();
  storageRef.child('../img/userphotos/id.png')
  return storageRef
}

export const uploadImage = (image, id) => {
  doCreateNewImage(id).put(image)
  .then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});
}
  // db.ref(`users/${id}`).update({
  //   ...user,
  // })
