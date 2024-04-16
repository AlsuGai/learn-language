import { useState } from 'react'
import Header from './components/Header/Header'
import './style/index.scss'
import Footer from './components/Footer/Footer'
import Content from './components/Main/Content'

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App
