import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './components/mainlayout'
import HomePage from './pages/homepage/homepage'
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
