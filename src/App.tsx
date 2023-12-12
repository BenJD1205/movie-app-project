import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Routers from './routes'
import store from './store'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routers />
                <ToastContainer />
            </Router>
        </Provider>
    )
}

export default App
