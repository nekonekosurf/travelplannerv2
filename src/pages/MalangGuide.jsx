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
  singosariHistory,
  temples,
  templeRoutes,
  waterfalls,
  bromoInfo,
  batuHighland,
  tokoOenInfo,
  colonialSpots,
  jodipanInfo,
  localDishes,
  streetFoodAreas,
  coffeeInfo,
  souvenirs,
  accommodations,
  transportToCity,
  localTransport,
  bikeRentalShops,
  bikeRoutes,
  bikeLegalRisks,
  bikeChecklist,
  bromoBikeWarning,
  safetyAlerts,
  emergencyContacts,
} from '../data/malang-data'

export default function MalangGuide() {
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
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Malang_City_Skyline.jpg/1024px-Malang_City_Skyline.jpg"
        alt="マラン市街俯瞰"
        overlay
      >
        <span className="text-xs font-bold bg-sunset-600 px-3 py-1 rounded-full inline-block mb-2">
          完全ガイド
        </span>
        <h1 className="text-2xl font-black">マラン</h1>
        <p className="text-sm opacity-90 mt-1">寺院・滝・コロニアル遺産・食文化・バイク</p>
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
                  ? 'border-sunset-600 text-sunset-600'
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
          標高470m、「東ジャワのパリ」と呼ばれた高原都市。人口約90万人のうち30万人が学生という若い街。
          1,200年以上の歴史を持ち、シンゴサリ王朝の寺院群、オランダ植民地時代のアールデコ建築、
          そしてブロモ山・トゥンパックスウ滝へのアクセス拠点として旅行者を惹きつける。
          東ジャワ随一の食都でもあり、バクソ・マランやラウォンは必食。
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

        {/* Area tips */}
        <div className="mt-4 bg-ocean-50 rounded-xl p-3 border border-ocean-200">
          <p className="text-xs font-bold text-ocean-800 mb-1">エリア情報</p>
          <ul className="space-y-1">
            <li className="text-xs text-gray-700">日中28-30℃、夜間17-20℃。ジャカルタより5℃涼しい。長袖1枚あると便利</li>
            <li className="text-xs text-gray-700">乾季6-10月がベスト（8月が最も乾燥）。雨季2月は月23日降雨</li>
            <li className="text-xs text-gray-700">市内移動はGrab/GoJek（Rp 5,000-20,000）。寺院巡りはバイクレンタルが最適</li>
            <li className="text-xs text-gray-700">ATM: BCA上限Rp 2,500,000/回。QRIS対応は大手チェーン/カフェのみ。ワルンは現金</li>
          </ul>
        </div>

        {/* Map */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">マラン エリアマップ</h3>
          <RouteMap spots={mapSpots} pois={mapPois} height="350px" />
        </div>
      </div>

      {/* ===== TEMPLES ===== */}
      <div id="temples" ref={(el) => (sectionRefs.current.temples = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">寺院 / チャンディ</h2>
        <p className="text-xs text-gray-500 mb-4">シンゴサリ王朝（1222-1292）の遺産。5寺院が郊外に点在</p>

        {/* Ken Arok story box */}
        <div className="bg-sunset-50 border border-sunset-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🗡️</span>
            <div>
              <p className="text-sm font-black text-gray-800">{singosariHistory.title}</p>
              <p className="text-xs text-gray-600">{singosariHistory.subtitle}</p>
            </div>
          </div>
          <div className="space-y-2">
            {singosariHistory.story.map((p, i) => (
              <p key={i} className="text-xs text-gray-700 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {temples.map((temple) => (
            <Accordion
              key={temple.id}
              id={`temple-${temple.id}`}
              title={temple.name}
              subtitle={`${temple.period} / ${temple.fee}`}
              icon="🏛️"
              forceOpen={forceOpenIds.has(`temple-${temple.id}`)}
              variant={temple.warning ? 'warning' : 'default'}
            >
              {temple.image && (
                <img src={temple.image} alt={temple.name} loading="lazy" className="w-full h-40 object-cover rounded-xl mt-1 mb-2" />
              )}
              <div className="grid grid-cols-2 gap-2 text-center mb-2">
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">距離</p>
                  <p className="text-[10px] font-bold">{temple.distance}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">営業</p>
                  <p className="text-[10px] font-bold">{temple.hours}</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mb-1">{temple.address}</p>
              <ul className="space-y-1">
                {temple.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700">
                    <span className="text-sunset-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>
              {temple.tips && (
                <p className="text-xs text-ocean-700 mt-2 font-medium">Tip: {temple.tips}</p>
              )}
              {temple.warning && (
                <p className="text-xs text-red-700 mt-2 font-bold">&#9888; {temple.warning}</p>
              )}
            </Accordion>
          ))}

          {/* Temple routes */}
          <Accordion
            id="temple-routes"
            title="寺院巡りモデルコース"
            subtitle="半日〜1日"
            icon="🗺️"
            forceOpen={forceOpenIds.has('temple-routes')}
          >
            <div className="space-y-3 mt-1">
              {templeRoutes.map((route) => (
                <div key={route.name} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{route.name}</p>
                  <p className="text-[10px] text-gray-600">{route.temples}</p>
                  <div className="flex gap-3 mt-1">
                    <span className="text-[10px] text-gray-500">{route.duration}</span>
                    <span className="text-[10px] text-gray-500">{route.distance}</span>
                    <span className="text-[10px] text-ocean-600 font-medium">{route.transport}</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-gray-600 mt-1">
                バイクでの寺院巡りについては →{' '}
                <button onClick={() => scrollToId('bike-rental')} className="text-ocean-600 underline">
                  バイクレンタル完全ガイド
                </button>
              </p>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== NATURE ===== */}
      <div id="nature" ref={(el) => (sectionRefs.current.nature = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">自然</h2>

        {/* Waterfalls subsection */}
        <h3 className="text-sm font-bold text-gray-600 mb-2">滝</h3>
        <div className="space-y-3 mb-6">
          {waterfalls.map((wf) => (
            <Accordion
              key={wf.id}
              id={`wf-${wf.id}`}
              title={wf.name}
              subtitle={wf.fee}
              icon="💧"
              forceOpen={forceOpenIds.has(`wf-${wf.id}`)}
            >
              {wf.image && (
                <img src={wf.image} alt={wf.name} loading="lazy" className="w-full h-40 object-cover rounded-xl mt-1 mb-2" />
              )}
              <div className="grid grid-cols-3 gap-2 text-center mb-2">
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">落差</p>
                  <p className="text-[10px] font-bold">{wf.height}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">距離</p>
                  <p className="text-[10px] font-bold">{wf.distance}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">営業</p>
                  <p className="text-[10px] font-bold">{wf.hours}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {wf.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700">
                    <span className="text-sunset-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>
              {wf.warning && (
                <p className="text-xs text-red-700 mt-2 font-bold">&#9888; {wf.warning}</p>
              )}
              {wf.parking && (
                <p className="text-[10px] text-gray-500 mt-1">駐車場: {wf.parking}</p>
              )}
            </Accordion>
          ))}
        </div>

        {/* Bromo subsection */}
        <h3 className="text-sm font-bold text-gray-600 mb-2">ブロモ山</h3>
        <div className="mb-6">
          {bromoInfo.image && (
            <img src={bromoInfo.image} alt="ブロモ山日の出" loading="lazy" className="w-full h-48 object-cover rounded-xl mb-3" />
          )}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: '標高', value: bromoInfo.elevation },
              { label: '展望台', value: bromoInfo.viewpoint },
              { label: '気温', value: bromoInfo.temperature },
              { label: '入場料', value: bromoInfo.fee },
              { label: '距離', value: bromoInfo.distance },
              { label: '火口階段', value: bromoInfo.steps },
            ].map((info) => (
              <div key={info.label} className="bg-sand-50 rounded-lg p-2 text-center">
                <p className="text-[10px] text-gray-500">{info.label}</p>
                <p className="text-[10px] font-bold">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <Accordion
              id="bromo-tours"
              title="ブロモ日帰りツアー（マラン発）"
              subtitle="Rp 350,000〜"
              icon="🌋"
              badge="おすすめ"
              variant="highlight"
              forceOpen={forceOpenIds.has('bromo-tours')}
            >
              <div className="space-y-2 mt-1">
                {bromoInfo.tours.map((tour) => (
                  <div
                    key={tour.type}
                    className={`rounded-xl border p-3 ${tour.recommended ? 'border-green-300 bg-green-50' : 'border-sand-200 bg-white'}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {tour.recommended && (
                        <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full font-bold">推奨</span>
                      )}
                      <p className="text-xs font-bold text-gray-800">{tour.type}</p>
                    </div>
                    <p className="text-xs font-bold text-sunset-600">{tour.price}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{tour.note}</p>
                  </div>
                ))}
              </div>
            </Accordion>

            <Accordion
              id="bromo-tips"
              title="ブロモ Tips"
              subtitle="予約・装備・注意点"
              icon="💡"
              forceOpen={forceOpenIds.has('bromo-tips')}
            >
              <div className="space-y-1.5 mt-1">
                {bromoInfo.tips.map((tip, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-ocean-600 font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}.</span>
                    <p className="text-xs text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        </div>

        {/* Batu Highland subsection */}
        <h3 className="text-sm font-bold text-gray-600 mb-2">バトゥ高原</h3>
        <p className="text-xs text-gray-500 mb-2">{batuHighland.elevation} / {batuHighland.distance}</p>
        <div className="space-y-3">
          {batuHighland.spots.map((spot) => (
            <Accordion
              key={spot.name}
              id={`batu-${spot.name.replace(/\s+/g, '-').toLowerCase()}`}
              title={spot.name}
              subtitle={spot.fee}
              icon="🏔️"
              forceOpen={forceOpenIds.has(`batu-${spot.name.replace(/\s+/g, '-').toLowerCase()}`)}
            >
              <p className="text-xs text-gray-700 mt-1">{spot.detail}</p>
              {spot.farms && (
                <p className="text-[10px] text-gray-500 mt-1">農園: {spot.farms}</p>
              )}
              {spot.hours && (
                <p className="text-[10px] text-gray-500 mt-0.5">営業: {spot.hours}</p>
              )}
            </Accordion>
          ))}
        </div>
      </div>

      {/* ===== COLONIAL / CITY WALK ===== */}
      <div id="colonial" ref={(el) => (sectionRefs.current.colonial = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">街歩き</h2>

        {/* Toko Oen highlight card */}
        <div className="bg-sunset-50 border border-sunset-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🍨</span>
            <div>
              <p className="text-sm font-black text-gray-800">{tokoOenInfo.name}</p>
              <p className="text-xs text-gray-600">{tokoOenInfo.year}開業 / {tokoOenInfo.hours}</p>
            </div>
          </div>
          {tokoOenInfo.image && (
            <img
              src={tokoOenInfo.image}
              alt="トコ・オエン"
              loading="lazy"
              className="w-full h-40 object-cover rounded-xl mb-2"
            />
          )}
          <p className="text-xs text-gray-700 leading-relaxed mb-2">
            {tokoOenInfo.origin}。現存するのはマランとスマラン店のみ。アールデコの内装がそのまま残る「タイムスリップ体験」。
          </p>
          <ul className="space-y-0.5">
            {tokoOenInfo.highlights.map((h, i) => (
              <li key={i} className="text-xs text-gray-700">
                <span className="text-sunset-600 mr-1">&#9679;</span>{h}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          {colonialSpots.map((spot) => (
            <Accordion
              key={spot.id}
              id={`colonial-${spot.id}`}
              title={spot.name}
              subtitle={spot.extra}
              icon="🏛️"
              forceOpen={forceOpenIds.has(`colonial-${spot.id}`)}
            >
              <p className="text-xs text-gray-700 mt-1">{spot.detail}</p>
              {spot.extra && (
                <p className="text-[10px] text-ocean-600 mt-1 font-medium">{spot.extra}</p>
              )}
            </Accordion>
          ))}

          {/* Jodipan */}
          <Accordion
            id="colonial-jodipan"
            title={jodipanInfo.name}
            subtitle={jodipanInfo.fee}
            icon="🌈"
            forceOpen={forceOpenIds.has('colonial-jodipan')}
          >
            {jodipanInfo.image && (
              <img src={jodipanInfo.image} alt="ジョディパン虹の村" loading="lazy" className="w-full h-40 object-cover rounded-xl mt-1 mb-2" />
            )}
            <p className="text-xs text-gray-700 mt-1 leading-relaxed">{jodipanInfo.story}</p>
            <p className="text-[10px] text-gray-500 mt-1">{jodipanInfo.adjacent}</p>
          </Accordion>
        </div>
      </div>

      {/* ===== FOOD ===== */}
      <div id="food" ref={(el) => (sectionRefs.current.food = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">食事</h2>

        {/* Bakso Malang highlight */}
        {localDishes.filter((d) => d.highlight).map((dish) => (
          <div key={dish.id} className="bg-sunset-50 border border-sunset-200 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🍜</span>
              <div>
                <p className="text-sm font-black text-gray-800">{dish.name}</p>
                <p className="text-xs text-gray-600">{dish.price}</p>
              </div>
            </div>
            {dish.image && (
              <img
                src={dish.image}
                alt={dish.name}
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl mb-2"
              />
            )}
            <p className="text-xs text-gray-700 leading-relaxed">{dish.desc}</p>
            {dish.restaurants.length > 0 && (
              <div className="mt-2">
                <p className="text-[10px] font-bold text-gray-600 mb-1">おすすめの店</p>
                {dish.restaurants.map((r) => (
                  <div key={r.name} className="text-[10px] text-gray-700 bg-white rounded-lg p-1.5 mb-1">
                    <span className="font-bold">{r.name}</span>
                    <span className="block text-gray-500">{r.address} / {r.hours}</span>
                    {r.note && <span className="block text-gray-500">{r.note}</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="space-y-3">
          {localDishes.filter((d) => !d.highlight).map((dish) => (
            <Accordion
              key={dish.id}
              id={`food-${dish.id}`}
              title={dish.name}
              subtitle={dish.price}
              icon="🍽️"
              forceOpen={forceOpenIds.has(`food-${dish.id}`)}
            >
              {dish.image && (
                <img src={dish.image} alt={dish.name} loading="lazy" className="w-full h-40 object-cover rounded-xl mt-1 mb-2" />
              )}
              <p className="text-xs text-gray-700 mt-1">{dish.desc}</p>
              {dish.restaurants.length > 0 && (
                <div className="mt-2">
                  <p className="text-[10px] font-bold text-gray-600 mb-1">おすすめの店</p>
                  {dish.restaurants.map((r) => (
                    <div key={r.name} className="text-[10px] text-gray-700 bg-sand-50 rounded-lg p-1.5 mb-1">
                      <span className="font-bold">{r.name}</span>
                      <span className="block text-gray-500">{r.address} / {r.hours}</span>
                      {r.note && <span className="block text-gray-500">{r.note}</span>}
                    </div>
                  ))}
                </div>
              )}
            </Accordion>
          ))}

          {/* Street food */}
          <Accordion
            id="food-street"
            title="ストリートフード・エリア"
            icon="🥘"
            forceOpen={forceOpenIds.has('food-street')}
          >
            <div className="space-y-2 mt-1">
              {streetFoodAreas.map((area) => (
                <div key={area.name} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold">{area.name}</p>
                  <p className="text-[10px] text-gray-500">{area.location} / {area.hours}</p>
                  <p className="text-[10px] text-gray-600">{area.note}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Coffee */}
          <Accordion
            id="food-coffee"
            title="カフェ"
            subtitle="Java Dancer等"
            icon="☕"
            forceOpen={forceOpenIds.has('food-coffee')}
          >
            <p className="text-xs text-gray-700 mt-1 mb-2">{coffeeInfo.intro}</p>
            <div className="space-y-1.5">
              {coffeeInfo.shops.map((shop) => (
                <div key={shop.name} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{shop.name}</span>
                  <span className="text-gray-500 ml-1">({shop.rating})</span>
                  <span className="block text-gray-600 text-[10px]">{shop.detail}</span>
                  <span className="block text-sunset-600 text-[10px] font-medium">{shop.budget}</span>
                </div>
              ))}
            </div>
            {coffeeInfo.uniqueCafes.length > 0 && (
              <div className="mt-2">
                <p className="text-[10px] font-bold text-gray-600 mb-1">ユニークカフェ</p>
                {coffeeInfo.uniqueCafes.map((c) => (
                  <p key={c.name} className="text-[10px] text-gray-700">
                    <span className="font-bold">{c.name}</span> — {c.detail}
                  </p>
                ))}
              </div>
            )}
          </Accordion>

          {/* Souvenirs */}
          <Accordion
            id="food-souvenirs"
            title="お土産"
            subtitle="テンペチップス・りんご製品"
            icon="🛍️"
            forceOpen={forceOpenIds.has('food-souvenirs')}
          >
            <div className="space-y-2 mt-1">
              {souvenirs.map((s) => (
                <div key={s.name} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold">{s.name}</p>
                  <p className="text-[10px] text-gray-600">{s.detail}</p>
                  <div className="flex justify-between mt-0.5">
                    <span className="text-[10px] text-sunset-600 font-medium">{s.price}</span>
                    <span className="text-[10px] text-gray-500">{s.shop}</span>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== ACCOMMODATION ===== */}
      <div id="stay" ref={(el) => (sectionRefs.current.stay = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">宿泊</h2>
        <div className="space-y-3">
          <Accordion
            id="stay-budget"
            title="バックパッカー / 中級"
            icon="🏨"
            defaultOpen
            forceOpen={forceOpenIds.has('stay-budget')}
          >
            <div className="space-y-2 mt-1">
              {accommodations.budget.map((h) => (
                <div key={h.name} className="border border-sand-200 rounded-xl p-3">
                  <p className="text-xs font-bold text-gray-800">{h.name}</p>
                  <p className="text-xs text-sunset-600 font-bold">{h.price}</p>
                  <p className="text-[10px] text-gray-600">{h.features}</p>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion
            id="stay-luxury"
            title="高級ホテル"
            subtitle="Hotel Tugu Malang"
            icon="🏰"
            forceOpen={forceOpenIds.has('stay-luxury')}
          >
            <div className="space-y-2 mt-1">
              {accommodations.luxury.map((h) => (
                <div key={h.name} className="border border-sunset-200 rounded-xl p-3 bg-sunset-50">
                  <p className="text-xs font-bold text-gray-800">{h.name}</p>
                  <p className="text-xs text-sunset-600 font-bold">{h.price}</p>
                  <p className="text-[10px] text-gray-600 mb-1">{h.features}</p>
                  {h.highlights && (
                    <ul className="space-y-0.5">
                      {h.highlights.map((hl, i) => (
                        <li key={i} className="text-[10px] text-gray-700">
                          <span className="text-sunset-600 mr-1">&#9679;</span>{hl}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== TRANSPORT ===== */}
      <div id="transport" ref={(el) => (sectionRefs.current.transport = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">交通</h2>
        <div className="space-y-3">
          {/* Yogya to Malang */}
          <Accordion
            id="transport-yogya"
            title={transportToCity.fromYogya.name}
            subtitle="6時間45分〜"
            icon="🚂"
            defaultOpen
            forceOpen={forceOpenIds.has('transport-yogya')}
          >
            <div className="mt-1">
              <div className="space-y-1.5 mb-2">
                {transportToCity.fromYogya.trains.map((t) => (
                  <div key={t.name} className="bg-sand-50 rounded-lg p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">{t.name}</span>
                      <span className="text-[10px] text-gray-500">{t.duration}</span>
                    </div>
                    <div className="flex gap-2 mt-0.5">
                      {t.economy !== '—' && (
                        <span className="text-[10px] text-gray-600">エコノミー: {t.economy}</span>
                      )}
                      {t.executive !== '—' && (
                        <span className="text-[10px] text-gray-600">エグゼクティブ: {t.executive}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-500">予約: {transportToCity.fromYogya.booking}</p>
            </div>
          </Accordion>

          {/* Surabaya to Malang */}
          <Accordion
            id="transport-surabaya"
            title={transportToCity.fromSurabaya.name}
            subtitle={`${transportToCity.fromSurabaya.train.duration} / ${transportToCity.fromSurabaya.train.fare}`}
            icon="🚂"
            forceOpen={forceOpenIds.has('transport-surabaya')}
          >
            <div className="mt-1 bg-sand-50 rounded-lg p-2">
              <p className="text-xs font-bold">{transportToCity.fromSurabaya.train.name}</p>
              <p className="text-[10px] text-gray-600">所要時間: {transportToCity.fromSurabaya.train.duration}</p>
              <p className="text-[10px] font-bold text-sunset-600">{transportToCity.fromSurabaya.train.fare}</p>
            </div>
          </Accordion>

          {/* Local transport */}
          <Accordion
            id="transport-local"
            title="市内交通"
            subtitle="Grab/アンコット/バイク"
            icon="🚕"
            forceOpen={forceOpenIds.has('transport-local')}
          >
            <div className="space-y-1.5 mt-1">
              {localTransport.map((t) => (
                <div key={t.name} className="bg-sand-50 rounded-lg p-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{t.name}</span>
                    <span className="text-[10px] font-bold text-sunset-600">{t.fare}</span>
                  </div>
                  <p className="text-[10px] text-gray-600">{t.detail}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Bike rental complete guide */}
          <Accordion
            id="bike-rental"
            title="バイクレンタル完全ガイド"
            subtitle="Rp 60,000〜 / 寺院巡りに最適"
            icon="🏍️"
            badge="おすすめ"
            variant="highlight"
            forceOpen={forceOpenIds.has('bike-rental')}
          >
            <div className="space-y-4 mt-1">
              {/* Price comparison */}
              <div>
                <p className="text-xs font-bold text-gray-800 mb-1">料金比較（Honda Beat / 24時間）</p>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-[10px] border-collapse min-w-[350px]">
                    <thead>
                      <tr className="bg-sand-100">
                        <th className="text-left p-1.5 font-bold">店名</th>
                        <th className="text-left p-1.5 font-bold">料金</th>
                        <th className="text-left p-1.5 font-bold">特徴</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bikeRentalShops.map((shop) => (
                        <tr key={shop.id} className={`border-t border-sand-200 ${shop.recommended ? 'bg-green-50' : ''}`}>
                          <td className="p-1.5">
                            <span className="font-bold">{shop.name}</span>
                            {shop.recommended && (
                              <span className="ml-1 text-[8px] bg-green-600 text-white px-1 py-0.5 rounded-full">推奨</span>
                            )}
                          </td>
                          <td className="p-1.5 font-bold">{shop.beat}</td>
                          <td className="p-1.5 text-gray-600">{shop.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Routes */}
              <div>
                <p className="text-xs font-bold text-gray-800 mb-1">推奨ルート</p>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-[10px] border-collapse min-w-[350px]">
                    <thead>
                      <tr className="bg-sand-100">
                        <th className="text-left p-1.5 font-bold">ルート</th>
                        <th className="text-left p-1.5 font-bold">距離</th>
                        <th className="text-left p-1.5 font-bold">難易度</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bikeRoutes.map((route) => (
                        <tr key={route.name} className={`border-t border-sand-200 ${route.difficulty === '★★★★★' ? 'bg-red-50' : ''}`}>
                          <td className="p-1.5">
                            <span className="font-bold">{route.name}</span>
                            <span className="block text-gray-500">{route.note}</span>
                          </td>
                          <td className="p-1.5">{route.distance}</td>
                          <td className="p-1.5">{route.difficulty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Shop details */}
              <div>
                <p className="text-xs font-bold text-gray-800 mb-1">主要レンタル店の詳細</p>
                {bikeRentalShops.filter((s) => s.recommended || s.id === 'erc' || s.id === 'moto').map((shop) => (
                  <div
                    key={shop.id}
                    className={`rounded-xl border p-3 mb-2 ${shop.recommended ? 'border-green-300 bg-green-50' : 'border-sand-200'}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {shop.recommended && (
                        <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full font-bold">推奨</span>
                      )}
                      <p className="text-xs font-bold text-gray-800">{shop.name}</p>
                    </div>
                    <p className="text-[10px] text-gray-500">{shop.address}</p>
                    <p className="text-[10px] text-gray-500">営業: {shop.hours}</p>
                    <p className="text-[10px] text-gray-600 mt-1">含: {shop.includes}</p>
                    <p className="text-[10px] text-gray-600">デポジット: {shop.deposit}</p>
                    {shop.whatsapp && (
                      <a
                        href={`https://wa.me/${shop.whatsapp.replace(/[^0-9+]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-[10px] bg-green-600 text-white px-2 py-1 rounded-full"
                      >
                        WhatsAppで問合せ
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Bike legal risks */}
          <Accordion
            id="bike-legal"
            title="バイク法的リスク・保険"
            subtitle="IDP問題・警察・医療費"
            icon="⚠️"
            variant="warning"
            forceOpen={forceOpenIds.has('bike-legal')}
          >
            <div className="space-y-2 mt-1">
              {bikeLegalRisks.map((r) => (
                <div key={r.risk} className="flex gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0 text-xs mt-0.5">!</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{r.risk}</p>
                    <p className="text-xs text-gray-600">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Bike checklist */}
          <Accordion
            id="bike-checklist"
            title="レンタル前チェックリスト"
            subtitle={`${bikeChecklist.length}項目`}
            icon="✅"
            forceOpen={forceOpenIds.has('bike-checklist')}
          >
            <div className="space-y-1 mt-1">
              {bikeChecklist.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="w-4 h-4 rounded border border-sand-300 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Bromo by scooter warning */}
          <Accordion
            id="bike-bromo-warning"
            title={bromoBikeWarning.title}
            icon="🚫"
            variant="warning"
            forceOpen={forceOpenIds.has('bike-bromo-warning')}
          >
            <div className="mt-1">
              <ul className="space-y-1 mb-2">
                {bromoBikeWarning.reasons.map((r, i) => (
                  <li key={i} className="text-xs text-red-700">
                    <span className="mr-1">&#9679;</span>{r}
                  </li>
                ))}
              </ul>
              <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                <p className="text-xs font-bold text-green-700">代替手段</p>
                <p className="text-xs text-gray-700">{bromoBikeWarning.alternative}</p>
              </div>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== SAFETY ===== */}
      <div id="safety" ref={(el) => (sectionRefs.current.safety = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">安全情報</h2>
        <SafetyAlerts alerts={safetyAlerts} />

        <div className="mt-3 bg-yellow-50 rounded-xl p-3 border border-yellow-200">
          <p className="text-xs font-bold text-yellow-800 mb-1">日本人ブロガーの声</p>
          <p className="text-xs text-gray-700 italic leading-relaxed">
            「マランで日本人を見たことがない」— livelog81
          </p>
          <p className="text-xs text-gray-700 italic leading-relaxed mt-1">
            「トゥンパックスウは相当チャレンジング」— 日本人旅行者
          </p>
          <p className="text-xs text-gray-700 italic leading-relaxed mt-1">
            「インドネシアの神戸」— japanesia.net
          </p>
        </div>

        {/* Emergency contacts */}
        <div className="mt-3">
          <p className="text-xs font-bold text-gray-800 mb-1">緊急連絡先</p>
          <div className="space-y-1">
            {emergencyContacts.map((c) => (
              <div key={c.name} className="flex justify-between items-center bg-sand-50 rounded-lg p-2">
                <span className="text-xs text-gray-700">{c.name}</span>
                <span className="text-xs font-bold text-gray-800">{c.number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 py-6 space-y-3">
        <div className="flex gap-3">
          <Link
            to="/day/7"
            className="flex-1 text-center bg-sunset-600 rounded-xl py-3 text-sm font-medium text-white"
          >
            Day 7 の行程 →
          </Link>
          <Link
            to="/day/8"
            className="flex-1 text-center bg-ocean-600 rounded-xl py-3 text-sm font-medium text-white"
          >
            Day 8 の行程 →
          </Link>
        </div>
        <Link
          to="/"
          className="block text-center bg-sand-100 rounded-xl py-3 text-sm font-medium text-gray-700"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
