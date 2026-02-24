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
import BaliGuide from './pages/BaliGuide'
import KetapangGuide from './pages/KetapangGuide'
import JakartaGuide from './pages/JakartaGuide'
import BandungGuide from './pages/BandungGuide'
import PangandaranGuide from './pages/PangandaranGuide'
import YogyakartaGuide from './pages/YogyakartaGuide'

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
          <Route path="/bali" element={<BaliGuide />} />
          <Route path="/ketapang" element={<KetapangGuide />} />
          <Route path="/jakarta" element={<JakartaGuide />} />
          <Route path="/bandung" element={<BandungGuide />} />
          <Route path="/pangandaran" element={<PangandaranGuide />} />
          <Route path="/yogyakarta" element={<YogyakartaGuide />} />
          <Route path="/info" element={<Info />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
