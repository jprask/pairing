import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import router from './router'

/* eslint-disable no-underscore-dangle */
// This enables the redux dev tools extension, or does nothing if not installed
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const store = createStore(
  router,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
)

export default store
