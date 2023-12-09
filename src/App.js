import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from './components/Home'
import LandPagePHP from './components/LandPagePHP';
import LandPageSQL from './components/LandPageSQL';
import ArticlePage1 from './components/Artikel/ArticlePage1';

function App() {
  return (
       <BrowserRouter>
       <main>
       <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/phplanding" element={<LandPagePHP/>} />
          <Route path="/sqllanding" element={<LandPageSQL/>} />
          <Route path="/phplanding/tutorial1" element={<ArticlePage1/>} />
          <Route path="/sqllanding/tutorial1" element={<ArticlePage1/>} />

       </Routes>
       </main>
     </BrowserRouter>
  );
}

export default App;
