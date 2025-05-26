import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Blogs from './components/Blogs'
import Services from './components/Services'
import BlogPost from './components/BlogPost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import CreateBlog from './components/CreateBlog'
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter basename='/blog'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="createblog" element={<CreateBlog />} />
          <Route path="blogpost/:id" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
