
import { Header } from './pages/MainHeader'
import './App.css'
import { MainContainer } from './pages/MainContainer'
import { BrowserRouter, Route, Routes} from 'react-router'
import { Home } from './pages/Home'
import { Galery } from './pages/Galery/Galery'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <main className='w-full h-full  content box-border overflow-y-scroll scrollbar-none'>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/galery' element={<Galery/>} />
        <Route path='/principal' element={<MainContainer/>}/>
      </Routes>
      
    </main>
    
    </BrowserRouter>
    </>
  )
}

export default App
