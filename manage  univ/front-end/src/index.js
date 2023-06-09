import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import  store  from './redux/store';
// import {usersFetch } from './redux/ProductSlice';
import { loadUser } from './redux/authSlice';

  import { usersApi } from './redux/UserApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
//dispatch  the action creator
// store.dispatch(usersFetch())
store.dispatch(loadUser(null))

root.render(
  <React.StrictMode>
    <Provider store={store}  >
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
