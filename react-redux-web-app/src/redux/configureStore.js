import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './modules';

const configureStore = (preloadedState, history) => {
  const middlewares = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const composed = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    const devExtension =
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    if (devExtension) {
      composed.push(devExtension);
    }
    /* eslint-enable */
  }

  const store = createStore(rootReducer, preloadedState, compose(...composed));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./modules', () => {
      // eslint-disable-next-line
      const nextRootReducers = require('./modules').default;
      store.replaceReducer(nextRootReducers);
    });
  }

  return store;
};

export default configureStore;
