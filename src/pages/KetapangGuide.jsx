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
  ferryQuickInfo,
  ferryPrices,
  ferryTips,
  ferryProcess,
  nearbyAttractions,
  restaurants,
  hotels,
  transportToKetapang,
  localTransport,
  safetyAlerts,
  practicalInfo,
  overnightPlan,
  japaneseInsights,
} from '../data/ketapang-data'

export default function KetapangGuide() {
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

  return (
    <div className="pb-14">
      <HeroImage
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ferry_Gilimanuk.jpg/1024px-Ferry_Gilimanuk.jpg"
        alt="ケタパン港フェリー"
        overlay
      >
        <span className="text-xs font-bold bg-ocean-600 px-3 py-1 rounded-full inline-block mb-2">
          前泊ガイド
        </span>
        <h1 className="text-2xl font-black">ケタパン港エリア</h1>
        <p className="text-sm opacity-90 mt-1">バリ島行きフェリー・シュノーケリング・1泊モデルプラン</p>
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
          ケタパン港はバニュワンギ県北部に位置するジャワ島→バリ島フェリーの出発港。
          多くの旅行者が「通過点」として素通りするが、港から車10分のバンスリン・アンダーウォーターは
          知る人ぞ知るシュノーケリングの穴場。1泊して海を楽しんでからバリ島に渡るのがおすすめ。
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

        {/* Practical info */}
        <div className="mt-4 bg-ocean-50 rounded-xl p-3 border border-ocean-200">
          <p className="text-xs font-bold text-ocean-800 mb-1">実用情報</p>
          <ul className="space-y-1">
            {practicalInfo.map((info) => (
              <li key={info.label} className="text-xs text-gray-700">
                <span className="font-bold text-ocean-700">{info.label}:</span> {info.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Overnight plan */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">1泊モデルプラン</h3>
          <div className="space-y-3">
            {overnightPlan.map((t) => (
              <div key={t.time} className="flex gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="text-lg">{t.icon}</span>
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

        {/* Map */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">ケタパン エリアマップ</h3>
          <RouteMap spots={mapSpots} pois={mapPois} height="350px" />
        </div>
      </div>

      {/* ===== FERRY ===== */}
      <div id="ferry" ref={(el) => (sectionRefs.current.ferry = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">ケタパン → ギリマヌク フェリー</h2>
        <p className="text-xs text-gray-500 mb-4">ジャワ島 → バリ島。24時間運航・所要約45分</p>

        {/* Quick info */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {ferryQuickInfo.map((info) => (
            <div key={info.label} className="bg-sand-50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-gray-500">{info.label}</p>
              <p className="text-xs font-bold">{info.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {/* Ferry prices */}
          <Accordion
            id="ferry-prices"
            title="フェリー料金表"
            subtitle="徒歩 Rp 10,600〜"
            icon="💰"
            defaultOpen
            forceOpen={forceOpenIds.has('ferry-prices')}
          >
            <table className="w-full text-xs border-collapse mt-1">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">種別</th>
                  <th className="text-left p-1.5 font-bold">料金</th>
                  <th className="text-left p-1.5 font-bold">備考</th>
                </tr>
              </thead>
              <tbody>
                {ferryPrices.map((f) => (
                  <tr key={f.type} className="border-t border-sand-200">
                    <td className="p-1.5">{f.type}</td>
                    <td className="p-1.5 font-bold">{f.price}</td>
                    <td className="p-1.5 text-gray-500">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Accordion>

          {/* Boarding process */}
          <Accordion
            id="ferry-boarding"
            title="乗船プロセス（徒歩旅客）"
            subtitle="5ステップ"
            icon="🚢"
            forceOpen={forceOpenIds.has('ferry-boarding')}
          >
            <div className="space-y-2 mt-1">
              {ferryProcess.map((item) => (
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
          </Accordion>

          {/* Ferry tips */}
          <Accordion
            id="ferry-tips"
            title="フェリー 10のTips"
            subtitle="時間帯・アプリ・船内の過ごし方"
            icon="💡"
            forceOpen={forceOpenIds.has('ferry-tips')}
          >
            <div className="space-y-2 mt-1">
              {ferryTips.map((tip, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-ocean-600 font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}.</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Ferry safety */}
          <SafetyAlerts
            alerts={[safetyAlerts[0]]}
          />
        </div>
      </div>

      {/* ===== ATTRACTIONS ===== */}
      <div id="attractions" ref={(el) => (sectionRefs.current.attractions = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">観光スポット</h2>
        <p className="text-xs text-gray-500 mb-4">港周辺〜車1時間圏内の見どころ</p>

        {/* Bangsring highlight card */}
        <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🤿</span>
            <div>
              <p className="text-sm font-black text-gray-800">バンスリン・アンダーウォーター</p>
              <p className="text-xs text-gray-600">港から車10分の穴場シュノーケリング</p>
            </div>
          </div>
          {nearbyAttractions[0].image && (
            <img
              src={nearbyAttractions[0].image}
              alt="バンスリン・アンダーウォーター"
              loading="lazy"
              className="w-full h-40 object-cover rounded-xl mb-2"
            />
          )}
          <p className="text-xs text-gray-700 leading-relaxed">
            地元漁師がダイナマイト漁で壊滅した珊瑚礁を自ら再生させた感動のプロジェクト。
            今ではカラフルなサンゴが広がり、浮き網（フローティングネット）でサメやウミガメと泳げる体験も。
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center">
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">入場</p>
              <p className="text-[10px] font-bold">Rp 15,000</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">シュノーケル</p>
              <p className="text-[10px] font-bold">Rp 50,000〜</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">サメ体験</p>
              <p className="text-[10px] font-bold">Rp 100,000〜</p>
            </div>
          </div>
          <button
            onClick={() => scrollToId('attraction-bangsring')}
            className="mt-2 text-xs text-ocean-600 underline"
          >
            詳細を見る →
          </button>
        </div>

        <div className="space-y-3">
          {nearbyAttractions.map((spot) => (
            <Accordion
              key={spot.id}
              id={`attraction-${spot.id}`}
              title={spot.name}
              subtitle={spot.tagline}
              icon="📍"
              badge={spot.fee}
              forceOpen={forceOpenIds.has(`attraction-${spot.id}`)}
            >
              {spot.image && (
                <img src={spot.image} alt={spot.name} loading="lazy" className="w-full h-40 object-cover rounded-xl mt-1 mb-2" />
              )}
              <div className="grid grid-cols-2 gap-2 text-center mb-2">
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">距離</p>
                  <p className="text-[10px] font-bold">{spot.distance}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">営業</p>
                  <p className="text-[10px] font-bold">{spot.hours}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {spot.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-gray-500 mt-1">ベストシーズン: {spot.season}</p>
            </Accordion>
          ))}
        </div>
      </div>

      {/* ===== FOOD ===== */}
      <div id="food" ref={(el) => (sectionRefs.current.food = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">食事</h2>

        <div className="space-y-3">
          {restaurants.map((r) => (
            <Accordion
              key={r.id}
              id={`food-${r.id}`}
              title={r.name}
              subtitle={`${r.type} / ${r.price}`}
              icon="🍽️"
              forceOpen={forceOpenIds.has(`food-${r.id}`)}
            >
              <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">距離</p>
                  <p className="text-[10px] font-bold">{r.distance}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">営業</p>
                  <p className="text-[10px] font-bold">{r.hours}</p>
                </div>
              </div>
              <p className="text-xs text-gray-700">{r.desc}</p>
              <div className="mt-2">
                <p className="text-[10px] font-bold text-gray-600 mb-1">おすすめメニュー</p>
                {r.recommended.map((item, i) => (
                  <p key={i} className="text-[10px] text-gray-700 bg-sand-50 rounded-lg p-1.5 mb-1">
                    <span className="text-sunset-600 mr-1">&#9679;</span>{item}
                  </p>
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      </div>

      {/* ===== ACCOMMODATION ===== */}
      <div id="stay" ref={(el) => (sectionRefs.current.stay = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">宿泊</h2>
        <p className="text-xs text-gray-500 mb-3">1泊だけの前泊。港近くが便利</p>

        <div className="space-y-3">
          {hotels.map((h) => (
            <Accordion
              key={h.id}
              id={`stay-${h.id}`}
              title={h.name}
              subtitle={`${h.type} / ${h.price}`}
              icon="🏨"
              badge={h.recommended ? 'おすすめ' : undefined}
              variant={h.recommended ? 'highlight' : undefined}
              defaultOpen={h.recommended}
              forceOpen={forceOpenIds.has(`stay-${h.id}`)}
            >
              <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">距離</p>
                  <p className="text-[10px] font-bold">{h.distance}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">タイプ</p>
                  <p className="text-[10px] font-bold">{h.type}</p>
                </div>
              </div>
              <p className="text-xs text-gray-700">{h.features}</p>
              <p className="text-[10px] text-gray-500 mt-1">{h.note}</p>
            </Accordion>
          ))}
        </div>
      </div>

      {/* ===== TRANSPORT ===== */}
      <div id="transport" ref={(el) => (sectionRefs.current.transport = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">交通</h2>

        <div className="space-y-3">
          {/* From Banyuwangi */}
          <Accordion
            id="transport-bwi"
            title="バニュワンギ → ケタパン港"
            subtitle="電車20分 / Grab 30分"
            icon="🚂"
            defaultOpen
            forceOpen={forceOpenIds.has('transport-bwi')}
          >
            <div className="space-y-2 mt-1">
              {Object.entries(transportToKetapang.fromBanyuwangi).map(([key, t]) => (
                <div key={key} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{t.route}</p>
                  <div className="flex gap-3 mt-1">
                    <span className="text-[10px] text-sunset-600 font-bold">{t.fare}</span>
                    <span className="text-[10px] text-gray-500">{t.duration}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-0.5">{t.note}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* From Malang */}
          <Accordion
            id="transport-malang"
            title="マラン → バニュワンギ（鉄道）"
            subtitle={`${transportToKetapang.fromMalang.train.fare} / ${transportToKetapang.fromMalang.train.duration}`}
            icon="🚂"
            forceOpen={forceOpenIds.has('transport-malang')}
          >
            <p className="text-xs text-gray-700 mt-1 mb-2">{transportToKetapang.fromMalang.train.route}</p>
            <table className="w-full text-[10px] border-collapse">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">列車名</th>
                  <th className="text-left p-1.5 font-bold">クラス</th>
                  <th className="text-left p-1.5 font-bold">料金</th>
                  <th className="text-left p-1.5 font-bold">出発</th>
                </tr>
              </thead>
              <tbody>
                {transportToKetapang.fromMalang.train.trains.map((t) => (
                  <tr key={t.name} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{t.name}</td>
                    <td className="p-1.5">{t.class}</td>
                    <td className="p-1.5">{t.fare}</td>
                    <td className="p-1.5">{t.departure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[10px] text-gray-500 mt-1">{transportToKetapang.fromMalang.train.note}</p>
          </Accordion>

          {/* Local transport */}
          <Accordion
            id="transport-local"
            title="ケタパン周辺の移動"
            subtitle="Grab / オジェック"
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

          {/* Time zone warning */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-3">
            <p className="text-xs font-bold text-amber-800">時差注意</p>
            <p className="text-xs text-amber-700 mt-1">
              バリ島に渡ると時差+1時間（ジャワ島 WIB UTC+7 → バリ島 WITA UTC+8）。
              フェリーの時刻表はジャワ時間（WIB）で表記。到着後はスマホの自動時刻設定をONに。
            </p>
          </div>
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
            <p><span className="font-bold">警察:</span> 110 / バニュワンギ警察 (0333) 421-110</p>
            <p><span className="font-bold">救急車:</span> 118 / 119</p>
            <p><span className="font-bold">在スラバヤ日本国総領事館:</span> (031) 503-0008</p>
            <p><span className="font-bold">海上保安:</span> (0333) 424-300</p>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <div className="px-4 pb-8">
        <div className="flex flex-col gap-2">
          <Link
            to="/banyuwangi"
            className="block w-full py-3 bg-sunset-600 text-white text-center text-sm font-bold rounded-xl"
          >
            バニュワンギ完全ガイド →
          </Link>
          <Link
            to="/bali"
            className="block w-full py-3 bg-ocean-600 text-white text-center text-sm font-bold rounded-xl"
          >
            バリ島ガイド →
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
