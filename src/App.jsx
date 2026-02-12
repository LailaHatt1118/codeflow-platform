import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import Pricing from "./components/Pricing.jsx"
import Testimonials from "./components/Testimonials.jsx"
import Footer from "./components/Footer.jsx"
import Login from "./components/Login.jsx"
import Contact from "./components/Contact.jsx"

function HomePage() {
  return (
    <>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;


// // import { jsxDEV } from "react/jsx-dev-runtime";
// // import { c as _c } from "react/compiler-runtime";
// import Navbar from "./components/Navbar.jsx"
// import Hero from "./components/Hero.jsx"
// import Features from "./components/Features.jsx"
// import Pricing from "./components/Pricing.jsx"
// import Testimonials from "./components/Testimonials.jsx"
// import Footer from "./components/Footer.jsx"
// import Login from "./components/Login.jsx"

// function App() {

//   return (
//     <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
//       <Navbar/>
//       <Hero/>
//       <Features/>
//       <Pricing/>
//       <Testimonials/>
//       <Login/>
//       <Footer/>
//     </div>
//   )
// }

// export default App
