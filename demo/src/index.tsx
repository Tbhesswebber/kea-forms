import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider, resetContext } from 'kea'
import { routerPlugin } from 'kea-router'
import { loadersPlugin } from 'kea-loaders'
import { formsPlugin } from '../../src'

resetContext({
  plugins: [routerPlugin, loadersPlugin, formsPlugin],
})

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()