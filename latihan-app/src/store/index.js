import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import employeeReducer from './reducer/employeeReducer'

const reducer = combineReducers ({
  employeeReducer
})

const store = createStore( reducer, applyMiddleware(thunk) )

export default store