import { useState } from 'react';
import './App.css';
import Banner from './component/banner/Banner';
import Navbar from './component/navbar/Navbar';
import Recipies from './component/recipies/Recipies';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipies></Recipies>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
