import { useState } from "react"
import "./styles.css"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}
