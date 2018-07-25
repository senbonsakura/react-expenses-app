import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);

});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('shouldnt remove expenses ids not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Sandwich',
        note: '',
        amount: 250,
        createdAt: 1
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses, expense])})


    test('should edit an expense', () => {
        const note = 'With Mayonnaise'
        const updates = {
            note
        }
    
        const action = {
            type: 'EDIT_EXPENSE',
            id:expenses[0].id,
            updates
        }
        
        const state = expensesReducer(expenses, action);
        expect(state[0].note).toBe(note)
    });


    test('should not edit an expense if expense not found', () => {
        const updates = {
            note: 'With Mayonnaise',
        }
    
        const action = {
            type: 'EDIT_EXPENSE',
            id:'-1',
            updates
        }
        
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses)
    });