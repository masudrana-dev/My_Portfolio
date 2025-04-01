import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Tech from './Components/Tech'
function App() {
  return (
    <>
      <div class="fixed inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
