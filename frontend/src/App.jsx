import { Courses } from "./components/Courses/Courses"
import Home from "./Home/home"
import{ Route, Routes } from "react-router-dom"
import{Navbar} from "./components/Navbar"
import Footer from "./components/Footer"
import { Signup } from "./components/Signup"

function App() {
 
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Navbar/>
     <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/courses'  element={<Courses/>}/>
        <Route path='/signup'  element={<Signup/>}/>
     </Routes>
     <Footer/>
   </div>
    </>
  )
}

export default App
