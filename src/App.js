import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './Components/Login';
import Markdown from './Components/Markdown';
import Signup from './Components/Signup';


export default function App() {
  
  return <>
     <BrowserRouter>
      <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='markdown' element={<Markdown/>}/>
      <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
     </BrowserRouter>
    
  </>
}
             