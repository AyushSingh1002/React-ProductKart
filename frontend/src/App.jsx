import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './component/Navbar.jsx';
import Home from './pages/Home.jsx';
import CreatePage from './pages/CreatePage.jsx';
import { useThemeStore } from './store/theme.js';
import { Toaster } from 'react-hot-toast';
function App() {
 const {theme} = useThemeStore()
  return (
    <div data-theme={theme} className='min-h-screen'>
        <Toaster/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
    </div>
  );
}

export default App;


