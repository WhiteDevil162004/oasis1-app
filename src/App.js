import React from 'react'
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header'
import Shop from './Pages/Shop/Shop';
import BlogPage from './Pages/Blogs/BlogPage';
import Footer from './Footer/Footer';
import Furniture from './Component/Furniture';
import Card from './Component/Card';

const App = () => {
  return (
  
    <BrowserRouter>
 <Header/>
    <Routes>
    <Route path='/' element={<Furniture/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/categories'element={<Card/>}/>
    <Route path='/blog' element={<BlogPage/>}/>
    </Routes>
    <div className='App'>
      <h1>Categories</h1>
      <Card/>
    </div>
  <Footer/>
    </BrowserRouter>
   
  )
}

export default App