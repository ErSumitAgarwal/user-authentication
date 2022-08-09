import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()
// console.log('Store:', store)
// console.log('State:', store.getState())

store.subscribe(() => {
  // console.log('Updated State', store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);