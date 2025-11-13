import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Gym from './pages/Gym';
import Trainers from './pages/Trainers';
import Rules from './pages/Rules';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/gym' element={<Gym /> } />
        <Route path='/trainers' element={<Trainers /> } />
        <Route path='/rules' element={<Rules /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
