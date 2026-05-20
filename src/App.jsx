import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Project from './components/Project';
import Skills from './components/Skills';
import HomePage from './pages/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<Navigate to="/oznurkan" replace />} />
        
        <Route path="/oznurkan" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
