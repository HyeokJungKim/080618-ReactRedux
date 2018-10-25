import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import {createStore} from 'redux'
import reducer from './Redux/reducer'
//Glue
import {Provider} from 'react-redux'
const store = createStore(reducer)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
