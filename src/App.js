import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { Blank, Orders, Products, Login, Register } from './pages'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path='orders' element={<Orders />}/>
                    <Route path='products' element={<Products />}/>
                    <Route path='customers' element={<Blank/>}/>
                    <Route path='stats' element={<Blank/>}/>
                    <Route path='calendar' element={<Blank/>}/>
                    <Route path='inbox' element={<Blank/>}/>
                    <Route path='settings' element={<Blank/>}/>
                </Route>
                <Route path='/customer/'>
                    <Route path='login' element={<Login />}/>
                    <Route path='register' element={<Register />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App