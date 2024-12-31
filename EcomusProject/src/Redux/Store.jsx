import RootReducer from './RutReducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
const Store = configureStore({
    reducer:RootReducer
})
export default Store