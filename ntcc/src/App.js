

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./Pages/LandingPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const DeveloerPage = lazy(() => import("./Pages/DeveloerPage"));
const FeaturePage  = lazy(() => import("./Pages/FeaturePage"));
const HowitWorks = lazy(() => import("./Pages/HowitWorks"));
const PresentationPage = lazy(() => import("./Pages/PresentationPage"));
const VideoPage = lazy(() => import("./Pages/VideoPage"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/development" element={<DeveloerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturePage />} />  
          <Route path="/how-it-works" element={<HowitWorks />} />
          <Route path='/video' element={<VideoPage />} />
          <Route path="/presentation" element={<PresentationPage />} />  
          
         
          
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

