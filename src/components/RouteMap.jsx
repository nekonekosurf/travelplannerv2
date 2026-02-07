import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default marker icon issue with bundlers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const numberIcon = (num) =>
  L.divIcon({
    className: '',
    html: `<div style="background:#ea580c;color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3)">${num}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  })

export default function RouteMap({ spots, height = '250px' }) {
  if (!spots || spots.length === 0) return null

  const validSpots = spots.filter((s) => s.lat && s.lng)
  if (validSpots.length === 0) return null

  const center = [
    validSpots.reduce((sum, s) => sum + s.lat, 0) / validSpots.length,
    validSpots.reduce((sum, s) => sum + s.lng, 0) / validSpots.length,
  ]

  const positions = validSpots.map((s) => [s.lat, s.lng])

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-sand-200" style={{ height }}>
      <MapContainer
        center={center}
        zoom={validSpots.length === 1 ? 13 : 10}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {validSpots.map((spot, i) => (
          <Marker key={i} position={[spot.lat, spot.lng]} icon={numberIcon(i + 1)}>
            <Popup>
              <strong className="text-sm">{spot.name}</strong>
            </Popup>
          </Marker>
        ))}
        {positions.length > 1 && (
          <Polyline
            positions={positions}
            pathOptions={{ color: '#ea580c', weight: 3, dashArray: '8, 8', opacity: 0.7 }}
          />
        )}
      </MapContainer>
    </div>
  )
}
