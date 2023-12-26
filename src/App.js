import React from 'react';
import './index.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Countries from './components/Countries';
import Country from './components/Country';
import Filter from './components/Filter';

function App() {
  return (
    <>
        <Header /> 
        <Filter />
        <Routes>
        <Route
        exact path='/'
        element={<Countries />} />
        <Route 
        path='/countries/:name' 
        element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
