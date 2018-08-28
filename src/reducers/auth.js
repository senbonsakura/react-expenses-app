export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action);
      return {
        uid: action.uid,
        photoURL:action.photoURL,
        displayName:action.displayName
      };
    case 'LOGOUT':
      return {};
    default:
      return state

  }

}
