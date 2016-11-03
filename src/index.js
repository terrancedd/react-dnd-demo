import {products} from './data/products.json'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import CardContainer from './containers/CardContainer'

import css from './css/app.css'


const store=createStore(reducer);


store.dispatch({
  type: 'RECEIVE_PRODUCTS',
  products: products
});


ReactDOM.render(
  <Provider store={store}>

  <CardContainer />
 
  </Provider>
  ,
 document.getElementById('root')
);
