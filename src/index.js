import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoReducers from './reducers'
import App from './components/App'
import { loadState } from './localStorage'

const persistedState = loadState()
const store = createStore(todoReducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
