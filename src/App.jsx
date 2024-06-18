import { useState } from 'react'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Table, Cards, Themes, Error } from './Pages';
import './style/App.scss'
import { Route, Routes } from 'react-router-dom';
import wordsJSON from './data/words.json'

function App() {
  const [words, setWords] = useState(wordsJSON);
  return (
    <>
      <header>
      <Header />
      </header>
    <main className='main'>
      <Routes>
        <Route path='/learn-language/' element={<Table />} />
        <Route path='/learn-language/cards' element={<Cards setWords = {setWords} words = {words} />}/>
        <Route path='/learn-language/themes' element={<Themes />}/>
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
