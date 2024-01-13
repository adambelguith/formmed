import './App.css';
import NavBar from './components/nav';
import FormUser from './components/form';
import FormTwo from './components/formtwo';
import FormThree from './components/FormThree';
import FormFour from './components/FormFour';
import React,{useState} from 'react';
import { Routes, Route } from "react-router-dom";
import FormCalc from './components/FormCalc';

function App() {
  return (
    <div className="App pb-32">
      <NavBar />
      <Routes>
      <Route path='/' element={<FormUser />} />
      <Route path='/premier' element={<FormTwo />} />
      <Route path='/symapatique' element={<FormThree />} />
      <Route path='/endocrine' element={<FormFour />} />
      <Route path='/calcultor' element={<FormCalc />} />
      </Routes>

    </div>
  );
}

export default App;
