/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import HomeW from "./pages/HomeW/HomeW"
import HistoryW from "./pages/HistoryW/HistoryW"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} /> */}
          <Route path="/" element={<HomeW />} />
          <Route path="/history" element={<HistoryW />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
