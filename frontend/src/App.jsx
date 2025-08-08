import './App.css'
import MainLayout from './Layout/MainLayout'
import { About, Contact, Home ,Services,PrivacyPolicy,TermsAndCondition} from './Pages/index.js'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
        <Routes>

          {/* Routes inside MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsAndCondition />} />
          </Route>

          {/* Routes outside MainLayout */}
          {/* <Route path="/login" element={<Login />} /> */}

        </Routes>
      </div>
    </>
  )
}

export default App
