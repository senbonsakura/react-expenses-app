import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import {isExportDeclaration} from 'typescript';

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc');

    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '123abc'})
});

test('should setup editexpense action object', () => {
    const action = editExpense('123abc', {note: 'New Note Value'})

    expect(action).toEqual({
        id: '123abc',
        type: 'EDIT_EXPENSE',
        updates: {
            note: 'New Note Value'
        }

    })

});

test('should setup add expense action object with provided values',()=> {
    const expenseData = {
        description : 'RENT',
        amount : 189500,
        createdAt:1000,
        note:'This was last months rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:expect.any(String)
        }
    })
})

test('should setup add expense action object with default values',()=> {
    
    const action = addExpense();

    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense: {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id:expect.any(String)
        }
    })
})


