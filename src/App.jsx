import About from "./components/About"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Landing />
      <About />
    </div>
  )
}

export default App
