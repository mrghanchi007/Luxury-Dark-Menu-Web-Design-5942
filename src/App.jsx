import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-luxury-dark text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <MenuSection />
    </motion.div>
  );
};

export default App;