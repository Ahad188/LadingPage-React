 
import './App.css'
import Achievement from './Components/Achievement/Achievement'
import Categories from './Components/Categories/Categories'
import Companies from './Components/Companies/Companies'
import Coerces from './Components/Courses/Cources'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
      <Hero/>
      <Companies/>
      <Coerces/>
      <Achievement/>
      <Categories/>
    </>
  )
}

export default App
