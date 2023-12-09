import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from './components/Home'
import LandPagePHP from './components/LandPagePHP';
import LandPageSQL from './components/LandPageSQL';
import ArticlePage1 from './components/Artikel/ArticlePage1';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route>

          <Route path="/easmultimedia" element={<Home/>} />
          
          <Route path="/easmultimedia/phplanding" element={<LandPagePHP/>} />
          <Route path="/easmultimedia/sqllanding" element={<LandPageSQL/>} />
          <Route path="/easmultimedia/phplanding/tutorial1" element={<ArticlePage1/>} />

         </Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
