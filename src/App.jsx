/* eslint-disable no-unused-vars */
// import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import ShowPage from './components/ShowPage';
import './App.css';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* we can add more than one routes to shared */}
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
          <Route path='/shows/:showId' element={<ShowPage/>} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
