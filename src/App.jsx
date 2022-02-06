import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/home';
import Library from './pages/library/library';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Index />} />
          <Route path='/library' element={ <Library />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
