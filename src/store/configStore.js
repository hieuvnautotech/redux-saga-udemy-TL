import {applyMiddleware, createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {initSagas} from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer,
        }),
        composeWithDevTools((applyMiddleware(...middlewares)))
    )
    // sagaMiddleware.run(testSaga)
    // sagaMiddleware.run(count)
    initSagas(sagaMiddleware)
    return store
} 
export default configureStore