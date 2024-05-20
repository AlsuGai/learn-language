import { useState } from 'react'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Table, Cards, Quiz, Themes, Error } from './Pages';
import './style/App.scss'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
      <Header />
    </header>
    <main className='main'>
      <Routes>
        <Route path='/learn-language' element={<Table />} />
        <Route path='/cards' element={<Cards />}/>
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/themes' element={<Themes />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </main> 
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App
