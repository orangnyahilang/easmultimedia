import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from './components/Home'
import LandPagePHP from './components/LandPagePHP';
import LandPageSQL from './components/LandPageSQL';
import ArticlePage1 from './components/Artikel/ArticlePage1';
import ArticlePage2 from './components/Artikel/ArticlePage2';
import ArticlePage3 from './components/Artikel/ArticlePage3';
import GridPHPSQL from './components/GridPHPSQL';

function App() {
  return (
       <BrowserRouter>
       <main>
       <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/phplanding" element={<LandPagePHP/>} />
          <Route path="/sqllanding" element={<LandPageSQL/>} />
          <Route path="/phplanding/tutorial1" element={<ArticlePage1/>} />
          <Route path="/phplanding/tutorial2" element={<ArticlePage2/>} />
          <Route path="/phplanding/tutorial3" element={<ArticlePage3/>} />
          <Route path="/sqllanding/tutorial1" element={<ArticlePage1/>} />

          <Route path="/tes" element={<GridPHPSQL/>} />

       </Routes>
       </main>
     </BrowserRouter>
  );
}

export default App;
