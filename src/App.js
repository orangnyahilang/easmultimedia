import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from './components/Home'
import LandPagePHP from './components/LandPagePHP';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route>

          <Route path="/easmultimedia" element={<Home/>} />
          <Route path="/phplanding" element={<LandPagePHP/>} />
            
         </Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
