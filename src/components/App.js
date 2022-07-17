import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from "./Layout"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'

import "./App.sass"

class App extends Component
{

  render () {
      return (
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/work" element={<Work />} />
                    </Routes>              
                </Layout>
            </Router>
      )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)