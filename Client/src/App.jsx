import React from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './Pages/About';
import Profile from './Pages/Profile';


export default function App() {
  return (
    <div>
      <h1 className='text-red-500'>Hello</h1>
      <BrowserRouter>

      <Routes>

        <Route path='/' element={<About/>}></Route>
        <Route path='/' element={<Profile/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  )
}
