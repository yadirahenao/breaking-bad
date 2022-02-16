import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/home';
import Library from './pages/library/library';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import { UserContextProvider } from './context/userContext';

function App() {
  return (
    <UserContextProvider>    
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/library' element={<Library />} />
            <Route path='/login' element={<Login />} />
            <Route path='/login/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
