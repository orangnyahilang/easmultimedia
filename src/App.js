import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from './components/Home'
import LandPagePHP from './components/LandPagePHP';
import LandPageSQL from './components/LandPageSQL';
import ArticlePage1 from './components/Artikel/ArticlePage1';
import ArticlePage2 from './components/Artikel/ArticlePage2';
import ArticlePage3 from './components/Artikel/ArticlePage3';
import Testing from './components/testing';
import ArticlePage6 from './components/Artikel/ArticlePage6';
import ArticlePage5 from './components/Artikel/ArticlePage5';
import ArticlePage4 from './components/Artikel/ArticlePage4';
import ArticlePage1sql from './components/Artikel/ArticlePage1sql';

function App() {
  return (
       <BrowserRouter>
       <main>
       <div className='App'>
       <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/phplanding" element={<LandPagePHP/>} />
          <Route path="/sqllanding" element={<LandPageSQL/>} />
          <Route path="/phplanding/tutorial1" element={<ArticlePage1/>} />
          <Route path="/phplanding/tutorial2" element={<ArticlePage2/>} />
          <Route path="/phplanding/tutorial3" element={<ArticlePage3/>} />
          <Route path="/phplanding/tutorial4" element={<ArticlePage4/>} />
          <Route path="/phplanding/tutorial5" element={<ArticlePage5/>} />
          <Route path="/phplanding/tutorial6" element={<ArticlePage6/>} />

          <Route path="/sqllanding/tutorial1" element={<ArticlePage1sql/>} />
          <Route path="/sqllanding/tutorial2" element={<ArticlePage2/>} />
          <Route path="/sqllanding/tutorial3" element={<ArticlePage3/>} />
          <Route path="/sqllanding/tutorial4" element={<ArticlePage4/>} />
          <Route path="/sqllanding/tutorial5" element={<ArticlePage5/>} />
          <Route path="/sqllanding/tutorial6" element={<ArticlePage6/>} />

          <Route path="/tes" element={<Testing/>} />

       </Routes>
       </div>
       </main>
     </BrowserRouter>
  );
}

export default App;
