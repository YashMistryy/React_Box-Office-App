/* eslint-disable no-unused-vars */
// import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import ShowPage from './components/ShowPage';
import './App.css';
import MainLayout from './components/MainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalTheme } from './theme';
// we need below for using useQuery custom hook for our app for fetching data
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
      <BrowserRouter>
        <Routes>
          {/* we can add more than one routes to shared */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>
            <Route path="/shows/:showId" element={<ShowPage />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
