import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


/*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
 esto lo borre porque renderiza 2 veces
  */
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
