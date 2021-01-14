import { createStore } from 'redux'

// action creator
function increment() {
    return {type: 'counter/increment'}
}

function decrement() {
    return {type: 'counter/decrement'}
}

function incrementByValue(payload) {
    return {type: 'counter/incrementByValue', payload}
}

// reducer
function counterReducer(state = { value: 0 }, action) {
    console.log('Reducer');
    switch (action.type) {
        case 'counter/increment':
            return { value: state.value + 1 }  
        case 'counter/decrement':
            return { value: state.value - 1 }  
        case 'counter/incrementByValue':
            return { value: state.value + action.payload }  
        default:
            return state;
    }
}

const state = createStore(counterReducer)
const counterElem = document.getElementById('counter')
counterElem.textContent = state.getState().value

state.subscribe(() => {
    counterElem.textContent = state.getState().value
})

const incrementButton = document.getElementById('counter-increment')

incrementButton.addEventListener('click', () => {
    state.dispatch(increment())
})

const decrementButton = document.getElementById('counter-decrement')

decrementButton.addEventListener('click', () => {
    state.dispatch(decrement())
})

// state.dispatch(increment())
// state.dispatch(incrementByValue(4))