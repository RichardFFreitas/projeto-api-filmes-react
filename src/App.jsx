import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
