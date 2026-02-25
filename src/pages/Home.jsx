import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import tripData from '../../data/trip.json'
import HeroImage from '../components/HeroImage'
import DayCard from '../components/DayCard'
import RouteMap from '../components/RouteMap'
import SafetyAlerts from '../components/SafetyAlerts'

const typeIcons = {
  transit: '🚂',
  nature: '🌿',
  beach: '🏖️',
  culture: '🏛️',
}

export default function Home() {
  const { meta, routeOverview, days } = tripData

  const overallMapSpots = useMemo(() => {
    if (!routeOverview.route) return []
    return routeOverview.route
      .filter((r) => r.lat && r.lng)
      .map((r) => ({
        name: `Day ${r.day}: ${r.area}`,
        lat: r.lat,
        lng: r.lng,
      }))
  }, [])

  return (
    <div>
      <HeroImage
        url={routeOverview.mapImageUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bandung_View_dari_Gedung_Wisma_HSBC_Asia_Afrika_4.jpg/960px-Bandung_View_dari_Gedung_Wisma_HSBC_Asia_Afrika_4.jpg'}
        alt="インドネシアの風景"
        overlay
      >
        <p className="text-xs font-medium tracking-widest uppercase opacity-80 mb-1">
          {meta.totalDays}日間の冒険
        </p>
        <h1 className="text-2xl sm:text-3xl font-black leading-tight">
          {meta.title}
        </h1>
        {meta.subtitle && (
          <p className="text-sm mt-2 opacity-90 italic">{meta.subtitle}</p>
        )}
      </HeroImage>

      <div className="px-4 py-6">
        {routeOverview.summary && (
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {routeOverview.summary}
          </p>
        )}

        {meta.budgetSummary && (
          <div className="mb-6">
            <h2 className="text-sm font-bold text-sunset-600 uppercase tracking-wide mb-3">
              1日あたりの予算目安
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(meta.budgetSummary.daily).map(([key, val]) => (
                <div key={key} className="bg-white border border-sand-200 rounded-xl p-3 text-center shadow-sm">
                  <p className="text-lg font-black text-sunset-600">
                    {val.jpy.toLocaleString()}<span className="text-xs font-normal text-gray-500">円</span>
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1 leading-tight">{val.label}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-1">※{meta.budgetSummary.excludes}</p>
          </div>
        )}

        {routeOverview.highlights?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold text-sunset-600 uppercase tracking-wide mb-3">
              この旅のハイライト
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {routeOverview.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-white border border-sand-200 rounded-xl px-3 py-2 text-sm text-gray-700 shadow-sm max-w-[200px] min-w-[160px]"
                >
                  {h}
                </div>
              ))}
            </div>
          </div>
        )}

        {overallMapSpots.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">全体ルートマップ</h2>
            <RouteMap spots={overallMapSpots} height="380px" />
            <p className="text-xs text-gray-500 mt-2 text-center">
              ジャカルタからバリ島まで、ジャワ島横断＆バリ島を巡る15日間
            </p>
          </div>
        )}

        {routeOverview.safetyAlerts?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-3">
              安全に関する重要な警告
            </h2>
            <SafetyAlerts alerts={routeOverview.safetyAlerts} />
          </div>
        )}

        {routeOverview.route?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">ルート概要</h2>
            <div className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden">
              {routeOverview.route.map((r, i) => {
                const hasDetail = days.find((d) => d.day === r.day)
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 ${
                      i < routeOverview.route.length - 1 ? 'border-b border-sand-100' : ''
                    } ${hasDetail ? '' : 'opacity-50'}`}
                  >
                    <span className="text-lg">{typeIcons[r.type] || '📍'}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sunset-600">Day {r.day}</span>
                        <span className="text-sm text-gray-700 truncate">{r.area}</span>
                      </div>
                    </div>
                    {hasDetail ? (
                      <Link to={`/day/${r.day}`} className="text-xs text-ocean-600 font-medium flex-shrink-0">
                        詳細 →
                      </Link>
                    ) : (
                      <span className="text-xs text-gray-500 flex-shrink-0">準備中</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <h2 className="text-lg font-bold text-gray-800 mb-4">旅のスケジュール</h2>

        {days.length > 0 ? (
          <div className="grid gap-4">
            {days.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 text-center py-8">
            準備中...
          </p>
        )}

        <Link
          to="/food"
          className="mt-6 block bg-sunset-600 text-white text-center rounded-xl py-3 text-sm font-medium hover:bg-sunset-700 transition-colors"
        >
          インドネシアの食ガイドを見る
        </Link>

        <Link
          to="/info"
          className="mt-3 block bg-ocean-600 text-white text-center rounded-xl py-3 text-sm font-medium hover:bg-ocean-700 transition-colors"
        >
          実用情報を見る（ビザ・通貨・持ち物など）
        </Link>
      </div>
    </div>
  )
}
