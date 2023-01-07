import About from "./components/About"
import AllInOne from "./components/AllInOne"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Support from "./components/Support"

function App() {

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Landing />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
