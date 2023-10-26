import './App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home"

function App() {

  return (
    <Router>
      <nav>
        <NavLink className="bg-blue-500" to="/">
          Home
        </NavLink>
        <NavLink className="text-black" to="/students">
          Students
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
