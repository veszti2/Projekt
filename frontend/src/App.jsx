import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Gym from './pages/Gym';
import Trainers from './pages/Trainers';
import Rules from './pages/Rules';
import Login from './pages/Login/LOgin';
import Navbar from './pages/Navbar';
import Register from './pages/Register/Register';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/gym' element={<Gym /> } />
        <Route path='/trainers' element={<Trainers /> } />
        <Route path='/rules' element={<Rules /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/register' element={<Register /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
