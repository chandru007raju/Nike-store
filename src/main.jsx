import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './style.css'
import  {Provider}  from 'react-redux'
import Store from './app/Store.js'
import { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <Provider store={Store}>
      <Toaster position='top-center' reverseOrder={false}/><App/></Provider>
  </React.StrictMode>
)
 