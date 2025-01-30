import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Home from "./pages/Home/Home"
import History from "./pages/History/History"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
