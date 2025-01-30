import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
<<<<<<< HEAD
import Home from "./pages/Home/Home"
import History from "./pages/History/History"
=======
import HomeW from "./pages/HomeW/HomeW"
import HistoryW from "./pages/HistoryW/HistoryW"
>>>>>>> main

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path='*' element='Page not found'/>
=======
        {/* <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} /> */}
          <Route path="/" element={<HomeW />} />
          <Route path="/history" element={<HistoryW />} />
>>>>>>> main
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
