import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef, useCallback } from 'react'
import HeroImage from '../components/HeroImage'
import Accordion from '../components/Accordion'
import SafetyAlerts from '../components/SafetyAlerts'
import RouteMap from '../components/RouteMap'
import {
  sections,
  mapSpots,
  mapPois,
  budgetSummary,
  transportFromJakarta,
  kawahPutihInfo,
  tangkubanPerahu,
  ciwideyAttractions,
  teaPlantations,
  colonialHeritage,
  localDishes,
  streetFood,
  restaurants,
  coffeeShops,
  shopping,
  accommodations,
  localTransport,
  toPangandaran,
  safetyAlerts,
  emergencyContacts,
  hospitals,
  modelItineraries,
  costEstimate,
  japaneseInsights,
} from '../data/bandung-data'

export default function BandungGuide() {
  const { hash } = useLocation()
  const [activeSection, setActiveSection] = useState('overview')
  const [forceOpenIds, setForceOpenIds] = useState(new Set())
  const sectionRefs = useRef({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      setForceOpenIds(new Set([id]))
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 52
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [hash])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    )
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    const el = sectionRefs.current[sectionId]
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 52
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  const scrollToId = useCallback((targetId) => {
    setForceOpenIds((prev) => new Set([...prev, targetId]))
    setTimeout(() => {
      const el = document.getElementById(targetId)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 52
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 100)
  }, [])

  const itineraryIcon = (icon) => {
    const icons = {
      train: '🚄', arrive: '📍', hotel: '🏨', walk: '🚶', food: '🍽️',
      dessert: '🍰', sleep: '😴', car: '🚗', nature: '🌋', camera: '📸',
      tea: '🍵', lake: '🚤', fruit: '🍓', museum: '🏛️', coffee: '☕',
      shop: '🛍️', music: '🎵', market: '🌙',
    }
    return icons[icon] || '📍'
  }

  return (
    <div className="pb-14">
      <HeroImage
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kawah_Putih%2C_Ciwidey_Bandung.jpg/1024px-Kawah_Putih%2C_Ciwidey_Bandung.jpg"
        alt="カワプティ火口湖 バンドン"
        overlay
      >
        <span className="text-xs font-bold bg-ocean-600 px-3 py-1 rounded-full inline-block mb-2">
          Day 1-2
        </span>
        <h1 className="text-2xl font-black">バンドン完全ガイド</h1>
        <p className="text-sm opacity-90 mt-1">高原都市の火口湖・アールデコ建築・スンダ料理</p>
      </HeroImage>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-30 bg-white border-b border-sand-200 shadow-sm">
        <div className="flex overflow-x-auto scrollbar-hide">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`flex-shrink-0 px-4 py-3 text-xs font-medium border-b-2 transition-colors ${
                activeSection === s.id
                  ? 'border-ocean-600 text-ocean-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ===== OVERVIEW ===== */}
      <div id="overview" ref={(el) => (sectionRefs.current.overview = el)} className="px-4 py-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          標高768mの高原都市バンドン。年間平均気温20〜25度で、ジャカルタ（海抜8m・猛暑）と比べて格段に涼しい。
          オランダ植民地時代に「東洋のパリ（Parijs van Java）」と称されたアールデコ建築の宝庫であり、
          スンダ人の文化的中心地。新鮮な野菜と独特のサンバルが特徴のスンダ料理は必食。
          南バンドンには硫黄の火口湖カワプティ、北にはタンクバン・プラフ火山がそびえる。
        </p>

        {/* Budget cards */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {budgetSummary.map((b) => (
            <div key={b.label} className="bg-sand-100 rounded-lg p-2">
              <span className="text-xs text-gray-500 block">{b.label}</span>
              <span className="text-sm font-bold">{b.value}</span>
              <span className="text-[10px] text-gray-500 block">{b.note}</span>
            </div>
          ))}
        </div>

        {/* Climate info */}
        <div className="mt-4 bg-ocean-50 rounded-xl p-3 border border-ocean-200">
          <p className="text-xs font-bold text-ocean-800 mb-1">気候情報</p>
          <ul className="space-y-1">
            <li className="text-xs text-gray-700"><span className="font-bold text-ocean-700">標高:</span> 650〜1,050m（市街中心部768m）</li>
            <li className="text-xs text-gray-700"><span className="font-bold text-ocean-700">気温:</span> 年間平均20〜25度（朝晩17度前後まで下がる）</li>
            <li className="text-xs text-gray-700"><span className="font-bold text-ocean-700">雨季:</span> 10月〜5月（特に12〜2月が多雨）</li>
            <li className="text-xs text-gray-700"><span className="font-bold text-ocean-700">乾季:</span> 6月〜9月（ベストシーズン）</li>
            <li className="text-xs text-gray-700"><span className="font-bold text-ocean-700">注意:</span> カワプティ（2,430m）やタンクバン・プラフ（2,084m）は市街地よりさらに5〜10度低い</li>
          </ul>
        </div>

        {/* Cost estimate table */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">費用見積もり（1泊2日 / 1人）</h3>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-sand-100">
                <th className="text-left p-1.5 font-bold">項目</th>
                <th className="text-left p-1.5 font-bold">節約</th>
                <th className="text-left p-1.5 font-bold">中級</th>
              </tr>
            </thead>
            <tbody>
              {costEstimate.map((row) => (
                <tr key={row.item} className={`border-t border-sand-200 ${row.item === '合計' ? 'bg-sand-100 font-bold' : ''}`}>
                  <td className="p-1.5">{row.item}</td>
                  <td className="p-1.5">{row.budget}</td>
                  <td className="p-1.5">{row.mid}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[10px] text-gray-500 mt-1">為替参考: 1 JPY ≒ 107 IDR（2026年2月時点概算）</p>
        </div>

        {/* Model itinerary — Day 1 */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">{modelItineraries.day1.title}</h3>
          <div className="space-y-3">
            {modelItineraries.day1.items.map((t) => (
              <div key={t.time} className="flex gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="text-lg">{itineraryIcon(t.icon)}</span>
                  <div className="w-px flex-1 bg-sand-300 mt-1" />
                </div>
                <div className="flex-1 pb-1">
                  <p className="text-[10px] text-gray-500 font-medium">{t.time}</p>
                  <p className="text-xs font-bold text-gray-800">{t.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Model itinerary — Day 2 */}
        <div className="mt-4 space-y-3">
          <Accordion
            id="itinerary-day2a"
            title={modelItineraries.day2a.title}
            subtitle="カワプティ・茶園・パテンガン湖"
            icon="🌋"
            badge="推奨"
            defaultOpen
            forceOpen={forceOpenIds.has('itinerary-day2a')}
          >
            <div className="space-y-3 mt-1">
              {modelItineraries.day2a.items.map((t) => (
                <div key={t.time} className="flex gap-3">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="text-lg">{itineraryIcon(t.icon)}</span>
                    <div className="w-px flex-1 bg-sand-300 mt-1" />
                  </div>
                  <div className="flex-1 pb-1">
                    <p className="text-[10px] text-gray-500 font-medium">{t.time}</p>
                    <p className="text-xs font-bold text-gray-800">{t.title}</p>
                    {t.desc && <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion
            id="itinerary-day2b"
            title={modelItineraries.day2b.title}
            subtitle="Gedung Sate・ブラガ通り・アンクルン"
            icon="🏛️"
            forceOpen={forceOpenIds.has('itinerary-day2b')}
          >
            <div className="space-y-3 mt-1">
              {modelItineraries.day2b.items.map((t) => (
                <div key={t.time} className="flex gap-3">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="text-lg">{itineraryIcon(t.icon)}</span>
                    <div className="w-px flex-1 bg-sand-300 mt-1" />
                  </div>
                  <div className="flex-1 pb-1">
                    <p className="text-[10px] text-gray-500 font-medium">{t.time}</p>
                    <p className="text-xs font-bold text-gray-800">{t.title}</p>
                    {t.desc && <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </div>

        {/* Map */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">バンドン エリアマップ</h3>
          <RouteMap spots={mapSpots} pois={mapPois} height="350px" />
        </div>
      </div>

      {/* ===== TRANSPORT ===== */}
      <div id="transport" ref={(el) => (sectionRefs.current.transport = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">ジャカルタ → バンドン 交通</h2>
        <p className="text-xs text-gray-500 mb-4">高速鉄道Whoosh 50分 / 在来線 約3時間 / バス 3〜4時間</p>

        {/* Whoosh vs Parahyangan comparison */}
        <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-4 mb-4">
          <p className="text-sm font-black text-gray-800 mb-2">Whoosh vs 在来線 比較</p>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="text-left p-1.5 font-bold"></th>
                <th className="text-left p-1.5 font-bold">Whoosh</th>
                <th className="text-left p-1.5 font-bold">在来線</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-ocean-200">
                <td className="p-1.5 font-bold">所要時間</td>
                <td className="p-1.5">約50分</td>
                <td className="p-1.5">約3時間</td>
              </tr>
              <tr className="border-t border-ocean-200">
                <td className="p-1.5 font-bold">最安料金</td>
                <td className="p-1.5">IDR 150,000</td>
                <td className="p-1.5">IDR 125,000</td>
              </tr>
              <tr className="border-t border-ocean-200">
                <td className="p-1.5 font-bold">到着駅</td>
                <td className="p-1.5">Tegalluar（郊外）</td>
                <td className="p-1.5 font-bold text-ocean-700">Bandung駅（中心部）</td>
              </tr>
              <tr className="border-t border-ocean-200">
                <td className="p-1.5 font-bold">二次交通</td>
                <td className="p-1.5">Grab 30分 IDR 40,000</td>
                <td className="p-1.5">不要（徒歩圏内）</td>
              </tr>
              <tr className="border-t border-ocean-200">
                <td className="p-1.5 font-bold">便数</td>
                <td className="p-1.5">40便/日</td>
                <td className="p-1.5">34便/日</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3">
          {/* Whoosh */}
          <Accordion
            id="transport-whoosh"
            title={transportFromJakarta.whoosh.name}
            subtitle={`${transportFromJakarta.whoosh.duration} / IDR 150,000〜`}
            icon="🚄"
            badge="推奨"
            defaultOpen
            forceOpen={forceOpenIds.has('transport-whoosh')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 mb-2">{transportFromJakarta.whoosh.route}</p>
              <table className="w-full text-xs border-collapse mb-2">
                <thead>
                  <tr className="bg-sand-100">
                    <th className="text-left p-1.5 font-bold">クラス</th>
                    <th className="text-left p-1.5 font-bold">料金</th>
                    <th className="text-left p-1.5 font-bold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {transportFromJakarta.whoosh.classes.map((c) => (
                    <tr key={c.name} className="border-t border-sand-200">
                      <td className="p-1.5 font-bold">{c.name}</td>
                      <td className="p-1.5">{c.price}</td>
                      <td className="p-1.5 text-gray-500">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-[10px] text-gray-500 mb-2">予約: {transportFromJakarta.whoosh.booking}</p>
              {transportFromJakarta.whoosh.tips.map((tip, i) => (
                <p key={i} className="text-xs text-gray-700 leading-relaxed mb-1">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{tip}
                </p>
              ))}
            </div>
          </Accordion>

          {/* Parahyangan */}
          <Accordion
            id="transport-parahyangan"
            title={transportFromJakarta.parahyangan.name}
            subtitle={`${transportFromJakarta.parahyangan.duration} / IDR 125,000〜`}
            icon="🚂"
            forceOpen={forceOpenIds.has('transport-parahyangan')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 mb-2">{transportFromJakarta.parahyangan.route}</p>
              <table className="w-full text-xs border-collapse mb-2">
                <thead>
                  <tr className="bg-sand-100">
                    <th className="text-left p-1.5 font-bold">クラス</th>
                    <th className="text-left p-1.5 font-bold">料金</th>
                    <th className="text-left p-1.5 font-bold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {transportFromJakarta.parahyangan.classes.map((c) => (
                    <tr key={c.name} className="border-t border-sand-200">
                      <td className="p-1.5 font-bold">{c.name}</td>
                      <td className="p-1.5">{c.price}</td>
                      <td className="p-1.5 text-gray-500">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-[10px] text-gray-500 mb-2">予約: {transportFromJakarta.parahyangan.booking}</p>
              {transportFromJakarta.parahyangan.tips.map((tip, i) => (
                <p key={i} className="text-xs text-gray-700 leading-relaxed mb-1">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{tip}
                </p>
              ))}
            </div>
          </Accordion>

          {/* Bus */}
          <Accordion
            id="transport-bus"
            title={transportFromJakarta.bus.name}
            subtitle="2.5〜4時間 / IDR 70,000〜"
            icon="🚌"
            forceOpen={forceOpenIds.has('transport-bus')}
          >
            <div className="space-y-1.5 mt-1">
              {transportFromJakarta.bus.options.map((opt) => (
                <div key={opt.type} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{opt.type}</span>
                  <div className="flex gap-3 mt-0.5">
                    <span className="text-sunset-600 font-bold">{opt.price}</span>
                    <span className="text-gray-500">{opt.duration}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 block">{opt.note}</span>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Local transport */}
          <Accordion
            id="transport-local"
            title="バンドン市内の移動"
            subtitle="Grab / アンコット / DAMRI"
            icon="🏍️"
            forceOpen={forceOpenIds.has('transport-local')}
          >
            <div className="space-y-1.5 mt-1">
              {localTransport.map((t) => (
                <div key={t.type} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{t.type}</span>
                  <span className="text-sunset-600 ml-1">{t.price}</span>
                  <span className="block text-gray-500 text-[10px]">{t.desc}</span>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== KAWAH PUTIH ===== */}
      <div id="kawah-putih" ref={(el) => (sectionRefs.current['kawah-putih'] = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">カワプティ火口湖</h2>
        <p className="text-xs text-gray-500 mb-4">標高2,430mの神秘的な白い火口湖。バンドン最大のハイライト</p>

        {/* Safety warning box */}
        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-3 mb-4">
          <p className="text-xs font-bold text-red-800">硫黄ガスに関する重大な注意事項</p>
          <ul className="mt-1 space-y-1">
            {kawahPutihInfo.safety.map((item, i) => (
              <li key={i} className="text-xs text-red-700 leading-relaxed">
                <span className="text-red-600 mr-1">&#9679;</span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-sand-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500">標高</p>
            <p className="text-xs font-bold">{kawahPutihInfo.altitude}</p>
          </div>
          <div className="bg-sand-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500">営業時間</p>
            <p className="text-xs font-bold">{kawahPutihInfo.hours}</p>
          </div>
          <div className="bg-sand-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500">外国人入場料</p>
            <p className="text-xs font-bold">IDR 122,000</p>
          </div>
          <div className="bg-sand-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500">GPS</p>
            <p className="text-[10px] font-bold">{kawahPutihInfo.gps}</p>
          </div>
        </div>

        {/* Shuttle info */}
        <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🚌</span>
            <div>
              <p className="text-sm font-black text-gray-800">{kawahPutihInfo.shuttle.name}</p>
              <p className="text-xs text-gray-600">火口湖までのシャトルバス</p>
            </div>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">{kawahPutihInfo.shuttle.desc}</p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-center">
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">運行</p>
              <p className="text-[10px] font-bold">{kawahPutihInfo.shuttle.operation}</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">所要時間</p>
              <p className="text-[10px] font-bold">{kawahPutihInfo.shuttle.duration}</p>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-2">{kawahPutihInfo.shuttle.note}</p>
        </div>

        {/* Photography tips */}
        <div className="bg-sand-50 rounded-xl p-3 border border-sand-200 mb-4">
          <p className="text-xs font-bold text-gray-800 mb-2">写真撮影のコツ</p>
          <div className="space-y-1">
            {kawahPutihInfo.photography.map((p, i) => (
              <div key={i} className="text-xs text-gray-700">
                <span className="font-bold text-ocean-700">{p.point}:</span> {p.detail}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {/* Entry fees */}
          <Accordion
            id="kawah-putih-prices"
            title="入場料・料金表"
            subtitle="外国人 IDR 122,000（シャトル込み）"
            icon="💰"
            forceOpen={forceOpenIds.has('kawah-putih-prices')}
          >
            <table className="w-full text-xs border-collapse mt-1">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">カテゴリ</th>
                  <th className="text-left p-1.5 font-bold">料金</th>
                  <th className="text-left p-1.5 font-bold">備考</th>
                </tr>
              </thead>
              <tbody>
                {kawahPutihInfo.prices.map((p) => (
                  <tr key={p.category} className="border-t border-sand-200">
                    <td className="p-1.5">{p.category}</td>
                    <td className="p-1.5 font-bold">{p.price}</td>
                    <td className="p-1.5 text-gray-500">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Accordion>

          {/* Getting there */}
          <Accordion
            id="kawah-putih-access"
            title="カワプティへの行き方"
            subtitle="Grabチャーター推奨 / 公共交通3回乗り継ぎ"
            icon="🚗"
            forceOpen={forceOpenIds.has('kawah-putih-access')}
          >
            <div className="mt-1">
              <p className="text-xs font-bold text-gray-800 mb-2">公共交通機関の場合</p>
              <div className="space-y-2 mb-3">
                {kawahPutihInfo.access.map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-ocean-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-gray-800 mb-2">チャーター・ツアー</p>
              {kawahPutihInfo.charter.map((c, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2 text-xs mb-1.5">
                  <span className="font-bold">{c.type}</span>
                  <span className="text-sunset-600 ml-1">{c.price}</span>
                  <span className="block text-[10px] text-gray-500">{c.note}</span>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Weather */}
          <Accordion
            id="kawah-putih-weather"
            title="天候対策・持ち物"
            subtitle="標高2,430m — 市街地より10度以上低い"
            icon="🌡️"
            forceOpen={forceOpenIds.has('kawah-putih-weather')}
          >
            <div className="space-y-1 mt-1">
              {kawahPutihInfo.weather.map((item, i) => (
                <p key={i} className="text-xs text-gray-700 leading-relaxed">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{item}
                </p>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== TANGKUBAN PERAHU ===== */}
      <div id="tangkuban" ref={(el) => (sectionRefs.current.tangkuban = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">タンクバン・プラフ火山</h2>
        <p className="text-xs text-gray-500 mb-4">「ひっくり返った船」— 4つの火口を持つ活火山（標高2,084m）</p>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-sand-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500">標高</p>
            <p className="text-xs font-bold">{tangkubanPerahu.altitude}</p>
          </div>
          <div className="bg-sand-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500">営業時間</p>
            <p className="text-xs font-bold">{tangkubanPerahu.hours}</p>
          </div>
          <div className="bg-sand-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500">入場（平日）</p>
            <p className="text-xs font-bold">IDR 200,000</p>
          </div>
          <div className="bg-sand-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500">入場（週末）</p>
            <p className="text-xs font-bold">IDR 300,000</p>
          </div>
        </div>

        {/* Hot spring eggs highlight */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🥚</span>
            <div>
              <p className="text-sm font-black text-gray-800">名物: 温泉卵</p>
              <p className="text-xs text-gray-600">ドマス火口の温泉で茹でた卵を地元の売り子から購入可能</p>
            </div>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            Kawah Domasの温泉地帯では足湯や泥スパも体験できる。
            ラトゥ火口から徒歩30分の下り坂（ユーカリ林を通る）。往復3〜4時間、ガイド推奨。
          </p>
        </div>

        {/* Warning */}
        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-3 mb-4">
          <p className="text-xs font-bold text-red-800">活火山の注意事項</p>
          <ul className="mt-1 space-y-1">
            {tangkubanPerahu.warnings.map((w, i) => (
              <li key={i} className="text-xs text-red-700 leading-relaxed">
                <span className="text-red-600 mr-1">&#9679;</span>{w}
              </li>
            ))}
          </ul>
        </div>

        {/* Craters */}
        <div className="space-y-3">
          {tangkubanPerahu.craters.map((crater) => (
            <Accordion
              key={crater.id}
              id={`crater-${crater.id}`}
              title={crater.name}
              subtitle={crater.desc.slice(0, 50) + '...'}
              icon="🌋"
              forceOpen={forceOpenIds.has(`crater-${crater.id}`)}
            >
              <p className="text-xs text-gray-700 mt-1 mb-2">{crater.desc}</p>
              <ul className="space-y-1">
                {crater.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}

          {/* Entry fees */}
          <Accordion
            id="tangkuban-prices"
            title="入場料"
            subtitle="外国人 IDR 200,000〜300,000"
            icon="💰"
            forceOpen={forceOpenIds.has('tangkuban-prices')}
          >
            <table className="w-full text-xs border-collapse mt-1">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">カテゴリ</th>
                  <th className="text-left p-1.5 font-bold">料金</th>
                </tr>
              </thead>
              <tbody>
                {tangkubanPerahu.prices.map((p) => (
                  <tr key={p.category} className="border-t border-sand-200">
                    <td className="p-1.5">{p.category}</td>
                    <td className="p-1.5 font-bold">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[10px] text-gray-500 mt-2">アクセス: {tangkubanPerahu.access}</p>
          </Accordion>
        </div>
      </div>

      {/* ===== CIWIDEY ===== */}
      <div id="ciwidey" ref={(el) => (sectionRefs.current.ciwidey = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">チウィデイ地区の見どころ</h2>
        <p className="text-xs text-gray-500 mb-4">カワプティ周辺。湖・鹿・グランピング・いちご狩り・茶園</p>

        <div className="space-y-3">
          {/* Situ Patenggang */}
          <Accordion
            id="ciwidey-situ-patenggang"
            title={ciwideyAttractions[0].name}
            subtitle={`${ciwideyAttractions[0].distance} / 入場 IDR 25,000`}
            icon="🚤"
            forceOpen={forceOpenIds.has('ciwidey-situ-patenggang')}
          >
            <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">標高</p>
                <p className="text-[10px] font-bold">{ciwideyAttractions[0].altitude}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">営業</p>
                <p className="text-[10px] font-bold">{ciwideyAttractions[0].hours}</p>
              </div>
            </div>
            <table className="w-full text-xs border-collapse mb-2">
              <tbody>
                {ciwideyAttractions[0].prices.map((p) => (
                  <tr key={p.item} className="border-t border-sand-200">
                    <td className="p-1.5">{p.item}</td>
                    <td className="p-1.5 font-bold">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="space-y-1">
              {ciwideyAttractions[0].highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Ranca Upas */}
          <Accordion
            id="ciwidey-ranca-upas"
            title={ciwideyAttractions[1].name}
            subtitle="鹿保護区・キャンプ場・天然温泉"
            icon="🦌"
            forceOpen={forceOpenIds.has('ciwidey-ranca-upas')}
          >
            <div className="mt-1">
              <table className="w-full text-xs border-collapse mb-2">
                <tbody>
                  {ciwideyAttractions[1].prices.map((p) => (
                    <tr key={p.item} className="border-t border-sand-200">
                      <td className="p-1.5">{p.item}</td>
                      <td className="p-1.5 font-bold">{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="space-y-1">
                {ciwideyAttractions[1].highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>

          {/* Glamping Lakeside */}
          <Accordion
            id="ciwidey-glamping"
            title={ciwideyAttractions[2].name}
            subtitle="湖上フローティングテント / IDR 1,590,000〜"
            icon="⛺"
            forceOpen={forceOpenIds.has('ciwidey-glamping')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 mb-2">予約: {ciwideyAttractions[2].booking}</p>
              <table className="w-full text-xs border-collapse mb-2">
                <tbody>
                  {ciwideyAttractions[2].prices.map((p) => (
                    <tr key={p.item} className="border-t border-sand-200">
                      <td className="p-1.5">{p.item}</td>
                      <td className="p-1.5 font-bold">{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="space-y-1">
                {ciwideyAttractions[2].highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>

          {/* Strawberry Farms */}
          <Accordion
            id="ciwidey-strawberry"
            title={ciwideyAttractions[3].name}
            subtitle={`入場 ${ciwideyAttractions[3].fee} / ${ciwideyAttractions[3].duration}`}
            icon="🍓"
            forceOpen={forceOpenIds.has('ciwidey-strawberry')}
          >
            <ul className="space-y-1 mt-1">
              {ciwideyAttractions[3].highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Tea Plantations */}
          <Accordion
            id="ciwidey-tea"
            title="茶園（Tea Plantations）"
            subtitle="ランチャバリ・マラバル・ガンブン"
            icon="🍵"
            forceOpen={forceOpenIds.has('ciwidey-tea')}
          >
            <div className="space-y-3 mt-1">
              {teaPlantations.map((tea) => (
                <div key={tea.id} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{tea.name}</p>
                  <p className="text-[10px] text-gray-500">{tea.location}</p>
                  {tea.fee !== '要確認' && (
                    <p className="text-[10px] text-sunset-600 font-bold">入場料: {tea.fee} / {tea.duration}</p>
                  )}
                  <ul className="mt-1 space-y-0.5">
                    {tea.highlights.map((h, i) => (
                      <li key={i} className="text-[10px] text-gray-700">
                        <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== COLONIAL ===== */}
      <div id="colonial" ref={(el) => (sectionRefs.current.colonial = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">コロニアル建築・歴史遺産</h2>
        <p className="text-xs text-gray-500 mb-4">「東洋のパリ」— アジア唯一のアールデコ都市</p>

        {/* Gedung Sate highlight card */}
        <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🏛️</span>
            <div>
              <p className="text-sm font-black text-gray-800">ゲドゥン・サテ</p>
              <p className="text-xs text-gray-600">串焼き（サテ）の形をした尖塔が特徴の西ジャワ州庁舎</p>
            </div>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            1924年竣工。中央の尖塔に6つの球体が載り、サテ（串焼き）に見えることが名前の由来。
            6つの球体は建設費600万ギルダーを象徴。ルネサンス、ムーア、インドネシア伝統様式が融合。
            展望台のCoffee Morningカフェではバンドン市街360度パノラマが楽しめる。
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-center">
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">営業時間</p>
              <p className="text-[10px] font-bold">火〜日 09:30〜16:00</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">入場</p>
              <p className="text-[10px] font-bold">要事前予約</p>
            </div>
          </div>
          <button
            onClick={() => scrollToId('colonial-gedung-sate')}
            className="mt-2 text-xs text-ocean-600 underline"
          >
            詳細を見る →
          </button>
        </div>

        <div className="space-y-3">
          {/* Gedung Merdeka */}
          <Accordion
            id="colonial-gedung-merdeka"
            title={colonialHeritage[0].name}
            subtitle="1955年アジアアフリカ会議（バンドン会議）の会場"
            icon="🏛️"
            badge="無料"
            defaultOpen
            forceOpen={forceOpenIds.has('colonial-gedung-merdeka')}
          >
            <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">営業</p>
                <p className="text-[10px] font-bold">{colonialHeritage[0].hours}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">入場</p>
                <p className="text-[10px] font-bold">{colonialHeritage[0].fee}</p>
              </div>
            </div>
            <p className="text-xs text-gray-700 mb-2">住所: {colonialHeritage[0].address}</p>
            <ul className="space-y-1">
              {colonialHeritage[0].highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Gedung Sate */}
          <Accordion
            id="colonial-gedung-sate"
            title={colonialHeritage[1].name}
            subtitle="360度パノラマ展望台・VR/AR体験"
            icon="🏛️"
            forceOpen={forceOpenIds.has('colonial-gedung-sate')}
          >
            <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">営業</p>
                <p className="text-[10px] font-bold">{colonialHeritage[1].hours}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">入場</p>
                <p className="text-[10px] font-bold">{colonialHeritage[1].fee}</p>
              </div>
            </div>
            <p className="text-xs text-gray-700 mb-2">住所: {colonialHeritage[1].address} / 建築家: {colonialHeritage[1].architect}</p>
            <ul className="space-y-1">
              {colonialHeritage[1].highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Villa Isola */}
          <Accordion
            id="colonial-villa-isola"
            title={colonialHeritage[2].name}
            subtitle="インドネシア最も象徴的なアールデコ建築"
            icon="🏛️"
            forceOpen={forceOpenIds.has('colonial-villa-isola')}
          >
            <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">竣工</p>
                <p className="text-[10px] font-bold">{colonialHeritage[2].built}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">入場</p>
                <p className="text-[10px] font-bold">{colonialHeritage[2].fee}</p>
              </div>
            </div>
            <p className="text-xs text-gray-700 mb-2">住所: {colonialHeritage[2].address} / 建築家: {colonialHeritage[2].architect}</p>
            <ul className="space-y-1">
              {colonialHeritage[2].highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Braga Street */}
          <Accordion
            id="colonial-braga"
            title={colonialHeritage[3].name}
            subtitle="アールデコのファサードが連なる1920年代の目抜き通り"
            icon="🚶"
            forceOpen={forceOpenIds.has('colonial-braga')}
          >
            <p className="text-xs text-gray-700 mt-1 mb-2">住所: {colonialHeritage[3].address} / {colonialHeritage[3].history}</p>
            <ul className="space-y-1">
              {colonialHeritage[3].highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Kopi Aroma */}
          <Accordion
            id="colonial-kopi-aroma"
            title={`${coffeeShops[0].name} — ${coffeeShops[0].founded}創業`}
            subtitle="8年熟成アラビカ・薪焙煎の伝説のコーヒー"
            icon="☕"
            forceOpen={forceOpenIds.has('colonial-kopi-aroma')}
          >
            <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">住所</p>
                <p className="text-[10px] font-bold">{coffeeShops[0].address}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">形態</p>
                <p className="text-[10px] font-bold">{coffeeShops[0].type}</p>
              </div>
            </div>
            <ul className="space-y-1">
              {coffeeShops[0].highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
          </Accordion>
        </div>
      </div>

      {/* ===== FOOD ===== */}
      <div id="food" ref={(el) => (sectionRefs.current.food = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">食事 — スンダ料理完全ガイド</h2>
        <p className="text-xs text-gray-500 mb-4">新鮮な野菜・独特のサンバル・バナナの葉包み。インドネシア屈指の郷土料理</p>

        {/* Sundanese food highlight */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-4">
          <p className="text-sm font-black text-gray-800 mb-1">スンダ料理の特徴</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            スンダ料理はインドネシアでも最も洗練された郷土料理の一つ。新鮮な生野菜（ララパン）、
            多種多様なサンバル（辛味調味料）、バナナの葉で包んだご飯（ナシティンベル）が特徴。
            日本人の口に合いやすく、野菜の多さと素材の味を活かした調理法が魅力。
          </p>
        </div>

        <div className="space-y-3">
          {/* Sundanese dishes */}
          <Accordion
            id="food-sundanese"
            title="必食スンダ料理 9選"
            subtitle="ナシティンベル・カレドック・ロテック..."
            icon="🍛"
            defaultOpen
            forceOpen={forceOpenIds.has('food-sundanese')}
          >
            <div className="space-y-2 mt-1">
              {localDishes.map((d, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2">
                  <div className="flex justify-between items-start">
                    <p className="text-xs font-bold text-gray-800">{d.name}</p>
                    <span className="text-[10px] text-sunset-600 font-bold flex-shrink-0 ml-2">{d.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-0.5">{d.desc}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Street food */}
          <Accordion
            id="food-street"
            title="ストリートフード・B級グルメ"
            subtitle="バタゴール・スラビ・マルタバク..."
            icon="🍢"
            forceOpen={forceOpenIds.has('food-street')}
          >
            <div className="space-y-2 mt-1">
              {streetFood.map((f, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2">
                  <div className="flex justify-between items-start">
                    <p className="text-xs font-bold text-gray-800">{f.name}</p>
                    <span className="text-[10px] text-sunset-600 font-bold flex-shrink-0 ml-2">{f.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-0.5">{f.desc}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">おすすめ店: {f.shop}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Restaurants */}
          <Accordion
            id="food-restaurants"
            title="おすすめレストラン"
            subtitle="Sindang Reret・Kampung Daun..."
            icon="🍽️"
            forceOpen={forceOpenIds.has('food-restaurants')}
          >
            <div className="space-y-2 mt-1">
              {restaurants.map((r) => (
                <div key={r.id} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{r.name}</p>
                  <div className="flex gap-2 mt-0.5">
                    <span className="text-[10px] text-ocean-600">{r.type}</span>
                    <span className="text-[10px] text-sunset-600 font-bold">{r.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-0.5">{r.desc}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{r.address}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {r.recommended.map((item, i) => (
                      <span key={i} className="text-[10px] bg-white rounded px-1.5 py-0.5 text-gray-700">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Cafes & Coffee */}
          <Accordion
            id="food-cafes"
            title="カフェ & コーヒー文化"
            subtitle="Kopi Aroma（1930年）・Wiki Koffie・Braga Permai"
            icon="☕"
            forceOpen={forceOpenIds.has('food-cafes')}
          >
            <div className="space-y-2 mt-1">
              {coffeeShops.map((c) => (
                <div key={c.id} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{c.name}</p>
                  <div className="flex gap-2 mt-0.5">
                    <span className="text-[10px] text-ocean-600">{c.type}</span>
                    {c.price && <span className="text-[10px] text-sunset-600 font-bold">{c.price}</span>}
                  </div>
                  <p className="text-[10px] text-gray-500">{c.address}</p>
                  <ul className="mt-1 space-y-0.5">
                    {c.highlights.map((h, i) => (
                      <li key={i} className="text-[10px] text-gray-700">
                        <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-2">
              近年はサードウェーブ系のスペシャルティコーヒーショップも急増中。Dago地区やBraga通り周辺に集中。
            </p>
          </Accordion>

          {/* Shopping */}
          <Accordion
            id="food-shopping"
            title="ショッピング"
            subtitle="Rumah Mode・Heritage FO・Pasar Baru"
            icon="🛍️"
            forceOpen={forceOpenIds.has('food-shopping')}
          >
            <div className="space-y-2 mt-1">
              {shopping.map((s) => (
                <div key={s.id} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{s.name}</p>
                  <p className="text-[10px] text-gray-500">{s.address} / {s.hours}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{s.desc}</p>
                  <p className="text-[10px] text-ocean-600 mt-0.5">{s.note}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== ACCOMMODATION ===== */}
      <div id="stay" ref={(el) => (sectionRefs.current.stay = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">宿泊</h2>
        <p className="text-xs text-gray-500 mb-3">週末（金〜日）はジャカルタからの観光客で大混雑。料金も1.5〜2倍に。可能なら平日泊を</p>

        <div className="space-y-3">
          {/* Station area */}
          <Accordion
            id="stay-station"
            title={accommodations.station.area}
            subtitle={`${accommodations.station.hotels.length}軒 / IDR 200,000〜`}
            icon="🏨"
            defaultOpen
            forceOpen={forceOpenIds.has('stay-station')}
          >
            <div className="space-y-1.5 mt-1">
              {accommodations.station.hotels.map((h, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{h.name}</span>
                  <span className="text-sunset-600 ml-1">{h.price}</span>
                  <span className="block text-gray-500 text-[10px]">{h.features}</span>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Dago area */}
          <Accordion
            id="stay-dago"
            title={accommodations.dago.area}
            subtitle={`${accommodations.dago.hotels.length}軒 / IDR 200,000〜`}
            icon="🏨"
            forceOpen={forceOpenIds.has('stay-dago')}
          >
            <div className="space-y-1.5 mt-1">
              {accommodations.dago.hotels.map((h, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{h.name}</span>
                  <span className="text-sunset-600 ml-1">{h.price}</span>
                  <span className="block text-gray-500 text-[10px]">{h.features}</span>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Ciwidey area */}
          <Accordion
            id="stay-ciwidey"
            title={accommodations.ciwidey.area}
            subtitle={`${accommodations.ciwidey.hotels.length}軒 / IDR 55,000〜`}
            icon="⛺"
            forceOpen={forceOpenIds.has('stay-ciwidey')}
          >
            <div className="space-y-1.5 mt-1">
              {accommodations.ciwidey.hotels.map((h, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{h.name}</span>
                  <span className="text-sunset-600 ml-1">{h.price}</span>
                  <span className="block text-gray-500 text-[10px]">{h.features}</span>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== PANGANDARAN ===== */}
      <div id="pangandaran" ref={(el) => (sectionRefs.current.pangandaran = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">バンドン → パンガンダラン</h2>
        <p className="text-xs text-gray-500 mb-4">朝6時発のバス直行便が最も効率的。昼過ぎ到着</p>

        <div className="space-y-3">
          {/* Bus options */}
          <Accordion
            id="pangandaran-bus"
            title="バス直行便"
            subtitle="5〜8時間 / IDR 95,000〜175,000"
            icon="🚌"
            defaultOpen
            forceOpen={forceOpenIds.has('pangandaran-bus')}
          >
            <table className="w-full text-[10px] border-collapse mt-1">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">事業者</th>
                  <th className="text-left p-1.5 font-bold">出発</th>
                  <th className="text-left p-1.5 font-bold">料金</th>
                  <th className="text-left p-1.5 font-bold">時間</th>
                </tr>
              </thead>
              <tbody>
                {toPangandaran.bus.map((b) => (
                  <tr key={b.operator} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{b.operator}</td>
                    <td className="p-1.5">{b.departure}</td>
                    <td className="p-1.5">{b.price}</td>
                    <td className="p-1.5">{b.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Accordion>

          {/* Train option */}
          <Accordion
            id="pangandaran-train"
            title="鉄道経由（Banjar乗り換え）"
            subtitle={toPangandaran.train.total}
            icon="🚂"
            forceOpen={forceOpenIds.has('pangandaran-train')}
          >
            <div className="space-y-2 mt-1">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-ocean-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
                <p className="text-xs text-gray-700">{toPangandaran.train.step1}</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-ocean-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
                <p className="text-xs text-gray-700">{toPangandaran.train.step2}</p>
              </div>
            </div>
          </Accordion>

          {/* Tips */}
          <Accordion
            id="pangandaran-tips"
            title="移動のコツ"
            subtitle="朝6時発が最も効率的"
            icon="💡"
            forceOpen={forceOpenIds.has('pangandaran-tips')}
          >
            <div className="space-y-1 mt-1">
              {toPangandaran.tips.map((tip, i) => (
                <p key={i} className="text-xs text-gray-700 leading-relaxed">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{tip}
                </p>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== SAFETY ===== */}
      <div id="safety" ref={(el) => (sectionRefs.current.safety = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">安全情報</h2>

        <SafetyAlerts alerts={safetyAlerts} />

        {/* Japanese insights */}
        <div className="mt-4 bg-sand-50 rounded-xl p-4 border border-sand-200">
          <p className="text-xs font-bold text-gray-800 mb-2">日本人旅行者の声</p>
          <div className="space-y-2">
            {japaneseInsights.map((insight, i) => (
              <p key={i} className="text-xs text-gray-700 leading-relaxed">
                <span className="text-sunset-600 mr-1">&#9679;</span>{insight}
              </p>
            ))}
          </div>
        </div>

        {/* Emergency contacts */}
        <div className="mt-4 bg-red-50 rounded-xl p-4 border border-red-200">
          <p className="text-xs font-bold text-red-800 mb-2">緊急連絡先</p>
          <div className="space-y-1 text-xs text-gray-700">
            {emergencyContacts.map((c, i) => (
              <p key={i}><span className="font-bold">{c.type}:</span> {c.number}</p>
            ))}
          </div>
        </div>

        {/* Hospitals */}
        <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-200">
          <p className="text-xs font-bold text-blue-800 mb-2">病院</p>
          <div className="space-y-1 text-xs text-gray-700">
            {hospitals.map((h, i) => (
              <p key={i}><span className="font-bold">{h.name}:</span> {h.phone} — {h.note}</p>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 mt-2">バンドンには日本領事館はありません。緊急時はジャカルタの日本大使館に連絡してください。</p>
        </div>
      </div>

      {/* Navigation links */}
      <div className="px-4 pb-8">
        <div className="flex flex-col gap-2">
          <Link
            to="/bandung#itinerary-day2a"
            className="block w-full py-3 bg-green-600 text-white text-center text-sm font-bold rounded-xl"
          >
            Day 2 プランA: 南バンドン自然コース
          </Link>
          <Link
            to="/bandung#itinerary-day2b"
            className="block w-full py-3 bg-ocean-600 text-white text-center text-sm font-bold rounded-xl"
          >
            Day 2 プランB: 市内文化コース
          </Link>
          <Link
            to="/pangandaran"
            className="block w-full py-3 bg-sunset-600 text-white text-center text-sm font-bold rounded-xl"
          >
            パンガンダラン ガイド →
          </Link>
          <Link
            to="/"
            className="block w-full py-3 bg-sand-200 text-gray-700 text-center text-sm font-bold rounded-xl"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
