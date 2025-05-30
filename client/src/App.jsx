import { Button } from "flowbite-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Projects from './pages/Projects'
import Signup from './pages/Signup'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <button>click me</button>
    </>
  );
}
