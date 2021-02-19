import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBj-x66eJtzhj9SOCn3PFwXIBFZUiAlaok",
    authDomain: "loginfirebase-4101c.firebaseapp.com",
    projectId: "loginfirebase-4101c",
    storageBucket: "loginfirebase-4101c.appspot.com",
    messagingSenderId: "21196871737",
    appId: "1:21196871737:web:3ac2fc5de024407a1695e8"
  };

  //Initialize FireBase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;