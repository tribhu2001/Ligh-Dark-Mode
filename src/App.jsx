import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import NavBar from './components/NavBar'
import { ThemeProvider } from './theme-context'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blog' element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
