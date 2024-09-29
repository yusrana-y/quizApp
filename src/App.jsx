import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/quiz' element={<Quiz/>}></Route>
    </Routes>
    </>
  )
}

export default App
