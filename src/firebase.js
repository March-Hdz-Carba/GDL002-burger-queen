import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALcslEjY8FtuobRNq26dAaciBbQeD39aA",
    authDomain: "burger-queen-187ec.firebaseapp.com",
    databaseURL: "https://burger-queen-187ec.firebaseio.com",
    projectId: "burger-queen-187ec",
    storageBucket: "burger-queen-187ec.appspot.com",
    messagingSenderId: "438018435669",
    appId: "1:438018435669:web:5eb1c38e8c0422e8"
};


firebase.initializeApp(firebaseConfig);

export default firebase;