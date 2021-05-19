import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers'; // combined reducer object
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enhancer
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// import { createStore } from 'redux';

// // ACTION -- increment (function that returns object with action type)
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// // REDUCER -- interprets what action was called and how
// // STORE should be modified; return object

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'DECREMENT':
//       return state - 1;
//     case 'INCREMENT':
//       return state + 1;
//     default:
//       break;
//   }
// };

// // STORE -- globalized state; reducer argument
// let store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH -- send action to reducer
// store.dispatch(increment())
