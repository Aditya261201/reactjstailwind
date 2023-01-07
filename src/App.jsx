import About from "./components/About"
import AllInOne from "./components/AllInOne"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Support from "./components/Support"

function App() {

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Landing />
      <About />
      <Support />
      <AllInOne />
    </div>
  )
}

export default App
