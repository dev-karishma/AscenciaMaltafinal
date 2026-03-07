// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  
//   return (
//     <>
    
//     </>
//   )
// }

// export default App



import './App.css'
import GlobalStyles from './components/GlobalStyles'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programmes from './components/Programmes/Programmes'
import About from './components/About/About'
import Director from './components/Director/Director'
import News from './components/News/News'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Campuses from './components/Campuses/Campuses'
import JoinUs from './components/JoinsUs/JoinsUs'
import ContactForm from './components/ContactForm/ContactForm'
import { Routes, Route } from 'react-router-dom'
import AboutUs from "./components/AboutUs/AboutUs";
import AccreditationSection from './components/AccreditationSection/AccreditationSection'
import Collaboration from './components/Collaboration/Collaboration'
import ScrollToTop from './components/ScrollToTop'


function HomePage() {
  return (
    <>
      <Hero />
      <Programmes />
      <About />
      <Director />
      <Campuses />
      <Partners />
      <AccreditationSection/>
      <Collaboration/>
      <News />
      <JoinUs />

    </>
  )
}

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
       <ScrollToTop/>

      <Routes>
       
      
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>

      <Footer />
      </>

      )
}

export default App