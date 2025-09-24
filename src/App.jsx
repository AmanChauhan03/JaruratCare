import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <nav className="bg-blue-600 text-white p-3 flex gap-6 justify-center shadow">
          <NavLink to="/" 
            className={({ isActive }) =>
            isActive ? "text-white-600 font-bold underline" : "text-gray-700"}>Home
          </NavLink>

          <NavLink to="/patients" 
            className={({ isActive }) =>
            isActive ? "text-white-600 font-bold underline" : "text-gray-700"}>Patients
          </NavLink>

          <NavLink to="/about" 
            className={({ isActive }) =>
            isActive ? "text-white-600 font-bold underline" : "text-gray-700"}>About
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
