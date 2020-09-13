import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyAqG1dFZbYLbWt-HlLY7WiE5_72xgl21mk",
  authDomain: "javasy-vitamina-app.firebaseapp.com",
  databaseURL: "https://javasy-vitamina-app.firebaseio.com",
  projectId: "javasy-vitamina-app",
  storageBucket: "javasy-vitamina-app.appspot.com",
  messagingSenderId: "1048710133433",
  appId: "1:1048710133433:web:cfc88da033083ea4af4d68"
};

export const DATABASE_URL = "https://javasy-vitamina-app.firebaseio.com";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
