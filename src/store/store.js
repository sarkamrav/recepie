import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
 import rootSaga from '../pages/recepie/saga'
import logger from 'redux-logger'
import persistedReducer from './rootreducer'
import {persistStore} from 'redux-persist'
// we need an initialState otherwise , store will freak out


const sagaMiddleware = createSagaMiddleware()

// redux sagas is a middleware that we apply to the store
export  const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware,logger)
)
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default {store,persistor};