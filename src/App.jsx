import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta padre con Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Página principal */}
          <Route path="about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
