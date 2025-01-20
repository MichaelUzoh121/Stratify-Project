import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './/home/Home'
import About from './/about/About'
import Service from './/services/Services'
import Element from './elements/Elements';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import NoPage from './component/NoPage'
import Header from './new/Test';
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration.jsx'; // Import service worker registration



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="element" element={<Element />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="head" element={<Header />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

serviceWorkerRegistration.register();
