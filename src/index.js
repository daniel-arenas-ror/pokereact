import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { pokemonsReducer } from './reducers/pokemons';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger, featuring } from './middlewares';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
)

const store = createStore(
  pokemonsReducer,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
