import Navbar from "./components/Navbar"
import Leaderboard from "./components/Leaderboard"
import House from "./components/House"
import League from "./components/League"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/house" element={<House />} />
          <Route path="/league" element={<League />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
