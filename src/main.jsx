import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Section1 from './sections/section1/section1.jsx'
import Section2 from './sections/section2/section2.jsx'
import Section3 from './sections/section3/section3.jsx'
import Section4 from './sections/section4/section4.jsx'
import Section5 from './sections/section5/section5.jsx'
import Section6 from './sections/section6/section6.jsx'
import LowerNavbar from './components/Navbar/lower-navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <LowerNavbar />
  </React.StrictMode>,
)
