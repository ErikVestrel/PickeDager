
import { Header } from './pages/MainHeader'
import './App.css'
import { MainContainer } from './pages/MainContainer'
import { BrowserRouter, Route, Routes} from 'react-router'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <main className='w-full h-full mt-14 content box-border scroll'>
      <Routes>
        <Route index element={<p>holadiablo</p>} />
        <Route path='/principal' element={<MainContainer/>}/>
      </Routes>
      
    </main>
    
    </BrowserRouter>
    </>
  )
}

export default App
