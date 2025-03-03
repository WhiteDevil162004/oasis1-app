import React from 'react'
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Header/Header'
import Shop from './Pages/Shop/Shop';
import BlogPage from './Pages/Blogs/BlogPage';
import Footer from './Footer/Footer';

const App = () => {
  return (
  
    <BrowserRouter>
 <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/blog' element={<BlogPage/>}/>
    </Routes>
  <Footer/>
    </BrowserRouter>
   
  )
}

export default App