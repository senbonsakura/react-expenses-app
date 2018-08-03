
import authReducer from '../../reducers/auth'

test('should login with uid', () => {
  const uid = "testuid123"
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state).toEqual({uid})
})


test('should logout without uid', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({uid: 'something'}, action);
  expect(state).toEqual({})
})