import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import BlogPost from './components/BlogPost'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="/blogpost/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
