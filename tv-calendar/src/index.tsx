import React from 'react'
import ReactDOM from 'react-dom/client'
import { AceternityProvider } from '@acestarter/ui'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AceternityProvider>
      <App />
    </AceternityProvider>
  </React.StrictMode>
)

export default root
