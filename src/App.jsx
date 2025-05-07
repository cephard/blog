import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import BlogPost from './components/BlogPost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  return (
    <BrowserRouter basename='/blog'>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Hero />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="blogpost/:id" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
