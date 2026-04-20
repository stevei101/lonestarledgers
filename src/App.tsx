import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Technical from './components/Technical'
import Guarantee from './components/Guarantee'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Technical />
      <Guarantee />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
