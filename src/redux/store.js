import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import Reducer from './users/Reducer'
import rootSaga from "./saga/index"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store