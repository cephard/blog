import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Blogs from './components/Blogs'
import Services from './components/Inspirations'
import BlogPost from './components/BlogPost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import CreateBlog from './components/CreateBlog'
import Contact from './components/Contact'
import Inspirations from './components/Inspirations'
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="inspirations" element={<Inspirations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="createblog" element={<CreateBlog />} />
          <Route path="blogpost/:id" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
