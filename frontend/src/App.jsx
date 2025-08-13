import { useEffect } from 'react'
import './App.css'
import MainLayout from './Layout/MainLayout'
import { About, Contact, Home ,Services,PrivacyPolicy,TermsAndCondition,AppointmentBooking, Profile, Login, Signup, ForgotPassword} from './Pages/index.js'
import { Routes, Route, useLocation } from 'react-router-dom'




function App() {

  return (
    <>
      <div>
        <ScrollToTop/>
        <Routes>
          {/* Routes inside MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsAndCondition />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path='/appointment' element={<AppointmentBooking/>}/>
          {/* Routes outside MainLayout */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

        </Routes>
      </div>
    </>
  )
}



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, [pathname]);

  return null;
};

export default App
