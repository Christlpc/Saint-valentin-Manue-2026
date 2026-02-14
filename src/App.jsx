import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WishesPage from './pages/WishesPage';
import TimelinePage from './pages/TimelinePage';
import HistoryPage from './pages/HistoryPage';
import GalleryPage from './pages/GalleryPage';
import './App.css';

import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishes" element={<WishesPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> {/* Added route */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
