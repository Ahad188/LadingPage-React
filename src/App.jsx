 
import './App.css'
import Achievement from './Components/Achievement/Achievement'
import Categories from './Components/Categories/Categories'
import Companies from './Components/Companies/Companies'
import Coerces from './Components/Courses/Cources'
import Cta from './Components/Cta/Cta'
import { Footer } from './Components/Footer/Footer'
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
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
