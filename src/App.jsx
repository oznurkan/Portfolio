import './App.css'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className='w-full'>
    <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
    </Routes>
  </div>
  )
}

export default App
