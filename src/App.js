import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Docx  from './pages/Docx';
import Home from './pages/Home';
import Legal from './pages/Legal';
import ModiN1 from './pages/ModiN1';
import NoPage from './pages/NoPage';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    pointerEvents: 'none',
    width: '100vw',
    height: '100vh',
    background: `linear-gradient(to bottom, #000, #000), radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(84, 79, 209, 0.2) 0%, transparent 70%)`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'screen',
  };
  return (
    <div>
      <div style={backgroundStyle}></div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/modin1" element={<ModiN1 />} />
        <Route path="/docx" element={<Docx />} />
        <Route path="/legal" element={<Legal />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
