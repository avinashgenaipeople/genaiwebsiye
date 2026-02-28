import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Analytics from './components/Analytics'
import Home from './pages/Home'
import MembersWork from './pages/MembersWork'
import AboutUs from './pages/AboutUs'
import Differentiators from './pages/Differentiators'
import Testimonials from './pages/Testimonials'
import ContactUs from './pages/ContactUs'
import ApplyNow from './pages/ApplyNow'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members-work" element={<MembersWork />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/what-makes-us-different" element={<Differentiators />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
