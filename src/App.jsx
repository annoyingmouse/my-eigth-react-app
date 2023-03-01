import './App.scss'
import { Home } from './pages/home/Home.jsx'
import { Converter } from './pages/converter/Converter'
import {Link, Routes, Route} from "react-router-dom";

export const App = () => {

  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/converter">Converter</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/converter" element={<Converter/>}/>
      </Routes>

    </div>
  )
}
