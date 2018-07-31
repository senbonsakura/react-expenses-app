import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
  const action = removeExpense('123abc')
  console.log('ENVIRONMENT IS:',process.env.NODE_ENV);

  expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '123abc'})
})

test('should setup editexpense action object', () => {
  const action = editExpense('123abc', {note: 'New Note Value'})

  expect(action).toEqual({
    id: '123abc',
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'New Note Value'
    }

  })

})

test('should setup add expense action object with provided values', () => {

  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]

  })
})

// test('should setup add expense action object with default values',()=> {
//
//     const action = addExpense();
//
//     expect(action).toEqual({
//         type : 'ADD_EXPENSE',
//         expense: {
//             description : '',
//             note : '',
//             amount : 0,
//             createdAt : 0,
//             id:expect.any(String)
//         }
//     })
// })

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This ones better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')

  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })

})

test('should add expense with defaults to database and store', (done) => {

  const store = createMockStore({})
  const expenseDefault = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')

  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefault)
    done()
  })
})