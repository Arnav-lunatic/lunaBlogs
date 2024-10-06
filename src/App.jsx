import { useState } from 'react'
import { Footer } from './components/Footer'
import BlogsPage from './components/BlogsPage'
import Nav from './components/Nav'

function App() {

  return (
    <div className='w-full pt-20'>
      <Nav />
      <BlogsPage />
      <Footer />
    </div>
  )
}

export default App
