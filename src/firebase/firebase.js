import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA7v1D_r0KtGcwOPBVZYIotu-cILxbNmvU",
  authDomain: "expenses-react-1c365.firebaseapp.com",
  databaseURL: "https://expenses-react-1c365.firebaseio.com",
  projectId: "expenses-react-1c365",
  storageBucket: "expenses-react-1c365.appspot.com",
  messagingSenderId: "309486570493"
};


firebase.initializeApp(config);

firebase.database().ref().set({
  name:'Cihat Karli'
})