import { login, logout } from '../../actions/auth'



test('should generate login action object', ()=>{
  const uid = "testuid";
  const photoURL = "testurl";
  const displayName = "testname";
  const action = login({uid, photoURL, displayName});
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
    photoURL,
    displayName
  })
});

test('should generate logout action object',()=> {
  const action = logout();
  expect(action).toEqual({
    type:'LOGOUT'
  })
});

