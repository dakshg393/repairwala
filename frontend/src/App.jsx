import './App.css'
import MainLayout from './Layout/MainLayout'
import { Home ,Services} from './Pages/index.js'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
        <Routes>

          {/* Routes inside MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/services" element={<Services />} />
          </Route>

          {/* Routes outside MainLayout */}
          {/* <Route path="/login" element={<Login />} /> */}

        </Routes>
      </div>
    </>
  )
}

export default App
