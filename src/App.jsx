import { Routes, Route } from 'react-router-dom'

import Login from '@pages/Login'
import Home from '@pages/Home'
import { withAuthLayout, withNonAuthLayout } from '@components/layouts/withLayout'

import '@styles/App.css'

function App () {
    return( 
        <div className='app'>
            <Routes>
                {/* Anyone can see */}
                <Route 
                    path='/' 
                    exact 
                    element={withNonAuthLayout(<Login />)} 
                />

                {/* Authentecated */}
                <Route 
                    path='/home' 
                    exact 
                    element={withAuthLayout(<Home />)} 
                />
            </Routes>
        </div>
    )
}

export default App
