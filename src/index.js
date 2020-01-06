import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import DefaultErrorBoundary from './DefaultErrorBoundary'

import '@babel/polyfill'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
