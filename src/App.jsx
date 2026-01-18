import { useEffect} from 'react'
import './App.css'
import axios from "axios";
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {

  useEffect(()=>{
    axios.get("./data.json").then(res=> console.log(res.data)).catch(error=> console.log(error));
  }, [])
 

  return (
    <div className='w-full'>
    <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
    </Routes>
  </div>
  )
}

export default App
