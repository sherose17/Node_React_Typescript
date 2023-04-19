import React from 'react';
import NavBar from "./components/NavBar/NavBar"
import Cards from './components/Card/Cards';
import Search from './components/Search/Search';
import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Profile from './components/Profile/Profile';
import AddEmployee from "./components/AddEmployee/AddEmployee";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/add" element={<AddEmployee/>} />

      </Routes>

    </>
  );
}

export default App;
