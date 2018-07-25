import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy

});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy
})

const setCount = ({count} = {}) => ({
    type : 'SET',
    count
});

const resetCount = () => ({
    type : 'RESET',
});

const store = createStore((state = { count:0 },action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count : state.count + action.incrementBy
            };

        case 'DECREMENT' :

            return {
                count : state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET' :
            return {
                count : 0
            };
    }
    
})

const unsubscribe = store.subscribe(() => {
    console.log(`store value changed: ${store.getState().count}`)
})

store.dispatch(incrementCount({incrementBy:6}))

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:3}))

store.dispatch(resetCount())

store.dispatch(setCount({count:101}))

store.dispatch(setCount())
