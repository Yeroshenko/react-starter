import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
    <div>
        <h1>Hello Starter</h1>
    </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
