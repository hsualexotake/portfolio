import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default App
