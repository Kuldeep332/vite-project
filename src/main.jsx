import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import "./contexts/Datacontext.jsx"
import Datacontext from './contexts/Datacontext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Datacontext>
    <App />
    </Datacontext>

)
