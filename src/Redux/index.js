import React from 'react'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const rootReducer = combineReducers({
  // put all of your reducers in here
})

const reduxStore = createStore(
  rootReducer, // replace the function with your root reducer
  enhancer
)

const ReduxProvider = (props) => {
  return(
    <Provider store={reduxStore}>
      {props.children}
    </Provider>
  )
}

export default ReduxProvider