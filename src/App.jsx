import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import DayDetail from './pages/DayDetail'
import Info from './pages/Info'
import Food from './pages/Food'
import AirportGuide from './pages/AirportGuide'
import CityGuide from './pages/CityGuide'
import BanyuwangiGuide from './pages/BanyuwangiGuide'
import MalangGuide from './pages/MalangGuide'

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day/:id" element={<DayDetail />} />
          <Route path="/airport" element={<AirportGuide />} />
          <Route path="/city/:name" element={<CityGuide />} />
          <Route path="/banyuwangi" element={<BanyuwangiGuide />} />
          <Route path="/malang" element={<MalangGuide />} />
          <Route path="/info" element={<Info />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
