import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './style/general.scss'
import Cards from './components/Main/Cards'
import WordsList from './components/Main/WordsList'

function App() {
  return (
    <>
      <Header />
      <Cards />
      <WordsList />
      <Footer />
    </>
  )
}

export default App
