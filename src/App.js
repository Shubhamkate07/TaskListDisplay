import React from 'react'
import Nav from './Components/Nav'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import Home from './Components/Home'
import Todos from './Components/Todos'
import ViewTasks from './ViewTasks'
import Apps from './Apps'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
    

<Routes>
<Route path='/' element={<SignIn/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/viewtasks' element={<ViewTasks/>}></Route>
{/* <Route path='/todos' element={<Todos/>}/> */}
<Route path='/apps' element={<Apps/>}></Route>
</Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App
