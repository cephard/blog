import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import BlogPost from './components/BlogPost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NoPage from './components/NoPage'

function App() {

  return (
    <BrowserRouter basename='/blog' className='w-full'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="blogpost/:id" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
