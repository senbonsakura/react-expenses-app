import {firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase'


export const login = ({uid, photoURL, displayName}) => ({
  type: 'LOGIN',
  uid,
  photoURL,
  displayName
});

export const logout = () => ({
  type :'LOGOUT'
});


export const startLogin = () => {
  return () => {

    return firebase.auth().signInWithPopup(googleAuthProvider);

  }
};

export const startLoginFacebook = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);

  }
};
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
};
