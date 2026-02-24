import { useParams, Link, useLocation, Navigate } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import tripData from '../../data/trip.json'
import RouteMap from '../components/RouteMap'

const poiTypeLabels = {
  restaurant: '食事',
  convenience: 'コンビニ',
  atm: 'ATM',
  cafe: 'カフェ',
  mall: 'モール',
  pharmacy: '薬局',
  landmark: '観光',
  transit: '交通',
}

const poiTypeColors = {
  restaurant: 'bg-emerald-600',
  convenience: 'bg-blue-600',
  atm: 'bg-cyan-600',
  cafe: 'bg-yellow-700',
  mall: 'bg-violet-600',
  pharmacy: 'bg-red-600',
  landmark: 'bg-pink-600',
  transit: 'bg-gray-600',
}

export default function CityGuide() {
  const { name } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const cityData = tripData.cities?.[name]

  if (cityData?.customGuideUrl) {
    return <Navigate to={cityData.customGuideUrl} replace />
  }

  if (!cityData) {
    return (
      <div className="px-4 py-20 text-center">
        <p className="text-gray-500 text-sm">この街のガイドはまだ準備中です</p>
        <Link to="/" className="text-ocean-600 text-sm mt-4 inline-block">
          ホームに戻る
        </Link>
      </div>
    )
  }

  const mapCenter = useMemo(() => {
    if (!cityData.pois?.length) return null
    return {
      name: cityData.name,
      lat: cityData.center.lat,
      lng: cityData.center.lng,
    }
  }, [cityData])

  const mapSpots = useMemo(() => {
    if (!cityData.landmarks?.length) return []
    return cityData.landmarks.map((l) => ({
      name: l.name,
      lat: l.lat,
      lng: l.lng,
    }))
  }, [cityData])

  const mapPois = useMemo(() => {
    if (!cityData.pois?.length) return []
    return cityData.pois.map((p) => ({
      name: p.name,
      type: p.type,
      lat: p.lat,
      lng: p.lng,
      detail: p.description,
    }))
  }, [cityData])

  // Group POIs by type
  const poiGroups = useMemo(() => {
    const groups = {}
    cityData.pois?.forEach((p) => {
      if (!groups[p.type]) groups[p.type] = []
      groups[p.type].push(p)
    })
    return groups
  }, [cityData])

  return (
    <div>
      <div className="bg-gradient-to-b from-ocean-700 to-ocean-600 px-4 py-8 text-white">
        {cityData.backLink && (
          <Link to={cityData.backLink} className="text-xs opacity-80 mb-2 inline-block">&larr; {cityData.backLinkLabel || '戻る'}</Link>
        )}
        <h1 className="text-2xl font-black">{cityData.name}</h1>
        <p className="text-sm opacity-90 mt-1">{cityData.subtitle}</p>
      </div>

      {/* City description */}
      <div className="px-4 py-4">
        <p className="text-sm text-gray-700 leading-relaxed">{cityData.description}</p>
      </div>

      {/* Area tips */}
      {cityData.areaTips?.length > 0 && (
        <div className="px-4 pb-4">
          <div className="bg-sand-50 rounded-2xl p-4 border border-sand-200">
            <h3 className="text-sm font-bold text-gray-700 mb-2">エリア情報</h3>
            {cityData.areaTips.map((tip, i) => (
              <p key={i} className="text-xs text-gray-600 mt-1 leading-relaxed">
                <span className="text-sunset-500 mr-1">&#9679;</span>{tip}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* City Map */}
      <div className="px-4 pb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{cityData.name}マップ</h2>
        <RouteMap
          spots={mapSpots}
          pois={mapPois}
          height="400px"
        />
        {/* Legend */}
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-gray-500">
          {Object.keys(poiGroups).map((type) => (
            <span key={type} className="flex items-center gap-1">
              <span className={`w-3 h-3 rounded-full ${poiTypeColors[type] || 'bg-gray-500'} inline-block`} />
              {poiTypeLabels[type] || type}
            </span>
          ))}
        </div>
      </div>

      {/* POI List by type */}
      <div className="px-4 pb-6 space-y-4">
        <h2 className="text-lg font-bold text-gray-800">周辺スポット</h2>
        {Object.entries(poiGroups).map(([type, pois]) => (
          <div key={type}>
            <h3 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-1">
              <span className={`w-3 h-3 rounded-full ${poiTypeColors[type] || 'bg-gray-500'} inline-block`} />
              {poiTypeLabels[type] || type}
            </h3>
            <div className="space-y-2">
              {pois.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-sand-200 shadow-sm">
                  <p className="text-sm font-bold text-gray-800">{p.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{p.description}</p>
                  {p.googleMapsUrl && (
                    <a
                      href={p.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-ocean-600 mt-1 inline-block"
                    >
                      Google Mapsで見る
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Getting There */}
      {cityData.gettingThere && (
        <div className="px-4 pb-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-800">マランへのアクセス</h2>

          {/* From Yogyakarta */}
          {cityData.gettingThere.fromYogyakarta && (
            <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden">
              <div className="bg-ocean-600 px-4 py-3">
                <h3 className="text-sm font-bold text-white">{cityData.gettingThere.fromYogyakarta.title}</h3>
              </div>
              <div className="p-4 space-y-3">
                {cityData.gettingThere.fromYogyakarta.recommendation && (
                  <div className="bg-green-50 rounded-xl p-3 border border-green-200">
                    <p className="text-xs font-bold text-green-700 mb-1">おすすめ</p>
                    <p className="text-xs text-gray-700 leading-relaxed">{cityData.gettingThere.fromYogyakarta.recommendation}</p>
                  </div>
                )}
                {cityData.gettingThere.fromYogyakarta.trains?.map((train, i) => (
                  <div key={i} className="bg-sand-50 rounded-xl p-3">
                    <p className="text-sm font-bold text-gray-800">{train.name}</p>
                    <div className="mt-1 space-y-0.5">
                      <p className="text-xs text-gray-600">{train.departure} → {train.arrival}</p>
                      <p className="text-xs text-gray-600">所要時間: {train.duration}</p>
                      <p className="text-xs font-medium text-ocean-700">{train.classAndPrice}</p>
                      {train.note && <p className="text-xs text-gray-500 mt-1">{train.note}</p>}
                    </div>
                  </div>
                ))}
                {cityData.gettingThere.fromYogyakarta.booking && (
                  <div className="bg-yellow-50 rounded-xl p-3">
                    <p className="text-xs font-bold text-yellow-700 mb-1">チケット購入方法</p>
                    <p className="text-xs text-gray-700 leading-relaxed">{cityData.gettingThere.fromYogyakarta.booking}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* From Surabaya */}
          {cityData.gettingThere.fromSurabaya && (
            <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden">
              <div className="bg-ocean-600 px-4 py-3">
                <h3 className="text-sm font-bold text-white">{cityData.gettingThere.fromSurabaya.title}</h3>
              </div>
              <div className="p-4 space-y-3">
                {cityData.gettingThere.fromSurabaya.trains?.map((train, i) => (
                  <div key={i} className="bg-sand-50 rounded-xl p-3">
                    <p className="text-sm font-bold text-gray-800">{train.name}</p>
                    <div className="mt-1 space-y-0.5">
                      <p className="text-xs text-gray-600">{train.departure}</p>
                      <p className="text-xs text-gray-600">所要時間: {train.duration}</p>
                      <p className="text-xs font-medium text-ocean-700">{train.classAndPrice}</p>
                      {train.note && <p className="text-xs text-gray-500 mt-1">{train.note}</p>}
                    </div>
                  </div>
                ))}
                {cityData.gettingThere.fromSurabaya.bus && (
                  <div className="bg-sand-50 rounded-xl p-3">
                    <p className="text-xs font-bold text-gray-700 mb-1">バス/シャトル</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{cityData.gettingThere.fromSurabaya.bus}</p>
                  </div>
                )}
                {cityData.gettingThere.fromSurabaya.driving && (
                  <p className="text-xs text-gray-500">{cityData.gettingThere.fromSurabaya.driving}</p>
                )}
              </div>
            </div>
          )}

          {/* From Jakarta */}
          {cityData.gettingThere.fromJakarta && (
            <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden">
              <div className="bg-ocean-600 px-4 py-3">
                <h3 className="text-sm font-bold text-white">{cityData.gettingThere.fromJakarta.title}</h3>
              </div>
              <div className="p-4 space-y-3">
                {cityData.gettingThere.fromJakarta.flight && (
                  <div className="bg-green-50 rounded-xl p-3 border border-green-200">
                    <p className="text-xs font-bold text-green-700 mb-1">飛行機（推奨）</p>
                    <div className="space-y-0.5">
                      <p className="text-xs text-gray-700">航空会社: {cityData.gettingThere.fromJakarta.flight.airlines}</p>
                      <p className="text-xs text-gray-700">ルート: {cityData.gettingThere.fromJakarta.flight.route}</p>
                      <p className="text-xs text-gray-700">便数: {cityData.gettingThere.fromJakarta.flight.frequency}</p>
                      <p className="text-xs text-gray-700">所要時間: {cityData.gettingThere.fromJakarta.flight.duration}</p>
                      <p className="text-xs font-medium text-ocean-700">{cityData.gettingThere.fromJakarta.flight.price}</p>
                      <p className="text-xs text-gray-500 mt-1">予約: {cityData.gettingThere.fromJakarta.flight.booking}</p>
                    </div>
                  </div>
                )}
                {cityData.gettingThere.fromJakarta.train && (
                  <div className="bg-sand-50 rounded-xl p-3">
                    <p className="text-xs font-bold text-gray-700 mb-1">列車</p>
                    <div className="space-y-0.5">
                      <p className="text-xs text-gray-600">ルート: {cityData.gettingThere.fromJakarta.train.route}</p>
                      <p className="text-xs text-gray-600">所要時間: {cityData.gettingThere.fromJakarta.train.duration}</p>
                      <p className="text-xs font-medium text-ocean-700">{cityData.gettingThere.fromJakarta.train.price}</p>
                      <p className="text-xs text-gray-600">便数: {cityData.gettingThere.fromJakarta.train.frequency}</p>
                      {cityData.gettingThere.fromJakarta.train.note && (
                        <p className="text-xs text-gray-500 mt-1">{cityData.gettingThere.fromJakarta.train.note}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Station Info */}
      {cityData.station && (
        <div className="px-4 pb-6">
          <div className="bg-white rounded-2xl border border-sand-200 shadow-sm p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{cityData.station.name}</h2>
            <p className="text-xs text-gray-600 leading-relaxed">{cityData.station.description}</p>
            {cityData.station.facilities?.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-bold text-gray-700 mb-1">駅施設</p>
                <div className="flex flex-wrap gap-1">
                  {cityData.station.facilities.map((f, i) => (
                    <span key={i} className="text-[10px] bg-sand-100 text-gray-600 px-2 py-1 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
            )}
            {cityData.station.ticketPurchase?.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-bold text-gray-700 mb-1">チケット購入方法</p>
                {cityData.station.ticketPurchase.map((t, i) => (
                  <p key={i} className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    <span className="text-ocean-500 mr-1">&#9679;</span>{t}
                  </p>
                ))}
              </div>
            )}
            {cityData.station.eBoarding && (
              <div className="mt-3 bg-ocean-50 rounded-lg p-2">
                <p className="text-xs text-ocean-700 leading-relaxed">{cityData.station.eBoarding}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Airport Info */}
      {cityData.airport && (
        <div className="px-4 pb-6">
          <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden">
            <div className="bg-sunset-600 px-4 py-3">
              <h2 className="text-sm font-bold text-white">{cityData.airport.name}</h2>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-3">{cityData.airport.distanceFromCity}</p>
              <p className="text-xs font-bold text-gray-700 mb-2">空港→市内の交通手段</p>
              <div className="space-y-2">
                {cityData.airport.transport?.map((t, i) => (
                  <div key={i} className={`rounded-xl p-3 ${t.recommended ? 'bg-green-50 border border-green-200' : 'bg-sand-50'}`}>
                    <div className="flex items-center gap-2">
                      {t.recommended && <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full">推奨</span>}
                      <p className="text-sm font-bold text-gray-800">{t.method}</p>
                    </div>
                    <p className="text-xs font-medium text-ocean-700 mt-1">{t.price}</p>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{t.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accommodation */}
      {cityData.accommodation && (
        <div className="px-4 pb-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-800">宿泊ガイド</h2>

          {/* Best Areas */}
          {cityData.accommodation.bestAreas?.length > 0 && (
            <div className="bg-sand-50 rounded-2xl p-4 border border-sand-200">
              <h3 className="text-sm font-bold text-gray-700 mb-2">おすすめエリア</h3>
              {cityData.accommodation.bestAreas.map((a, i) => (
                <div key={i} className={`${i > 0 ? 'mt-2 pt-2 border-t border-sand-200' : ''}`}>
                  <p className="text-xs font-bold text-gray-800">{a.area}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{a.reason}</p>
                </div>
              ))}
            </div>
          )}

          {/* Budget */}
          {cityData.accommodation.budget?.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-600 mb-2">バックパッカー向け</h3>
              <div className="space-y-2">
                {cityData.accommodation.budget.map((h, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 border border-sand-200 shadow-sm">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-gray-800">{h.name}</p>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{h.price}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{h.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mid-range */}
          {cityData.accommodation.midRange?.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-600 mb-2">中級ホテル</h3>
              <div className="space-y-2">
                {cityData.accommodation.midRange.map((h, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 border border-sand-200 shadow-sm">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-gray-800">{h.name}</p>
                      <span className="text-[10px] bg-ocean-100 text-ocean-700 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{h.price}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{h.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Luxury */}
          {cityData.accommodation.luxury?.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-600 mb-2">高級ホテル</h3>
              <div className="space-y-2">
                {cityData.accommodation.luxury.map((h, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 border border-sunset-200 shadow-sm">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-gray-800">{h.name}</p>
                      <span className="text-[10px] bg-sunset-100 text-sunset-700 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{h.price}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{h.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cityData.accommodation.bookingTips && (
            <div className="bg-yellow-50 rounded-xl p-3">
              <p className="text-xs font-bold text-yellow-700 mb-1">予約のコツ</p>
              <p className="text-xs text-gray-700 leading-relaxed">{cityData.accommodation.bookingTips}</p>
            </div>
          )}
        </div>
      )}

      {/* Useful Apps */}
      {cityData.apps?.length > 0 && (
        <div className="px-4 pb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">便利なアプリ</h2>
          <div className="space-y-2">
            {cityData.apps.map((app, i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-sand-200 shadow-sm flex gap-3 items-start">
                <span className="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-ocean-700">{app.name.charAt(0)}</span>
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-800">{app.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{app.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related days */}
      {cityData.relatedDays?.length > 0 && (
        <div className="px-4 pb-6">
          <h3 className="text-sm font-bold text-gray-600 mb-2">関連する日程</h3>
          <div className="flex gap-2">
            {cityData.relatedDays.map((d) => (
              <Link
                key={d}
                to={`/day/${d}`}
                className="bg-sunset-600 text-white rounded-xl px-4 py-2 text-sm font-medium"
              >
                Day {d}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="px-4 pb-8">
        <Link
          to="/"
          className="block bg-sand-100 text-gray-700 text-center rounded-xl py-3 text-sm font-medium"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
