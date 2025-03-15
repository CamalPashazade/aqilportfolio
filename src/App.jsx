import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from './pages/about/About';

import './index.css'
import Gallery from "./pages/gallery/Gallery";
import  Contact from "./pages/contact/Contact";

function App() {


  return (
    <>
<div>
<BrowserRouter>
<Layout>
      <Routes>
       
          <Route index path="/"  element={<Home/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/gallery"  element={<Gallery/>} />
          <Route path="/contact"  element={<Contact/>} />



      
          <Route path="*" element={<NotFound />} />
   
      </Routes>
      </Layout>
    </BrowserRouter>
</div>
    </>
  )
}

export default App
