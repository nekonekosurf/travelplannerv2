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
  overviewFacts,
  historyTimeline,
  cultureInfo,
  casteSystem,
  areas,
  gilimanukDistances,
  gilimanukTransportOptions,
  airportInfo,
  rideHailing,
  scooterRental,
  privateDriver,
  peramaShuttle,
  kuraKuraBus,
  bluebirdTaxi,
  fastBoats,
  moneyInfo,
  simCardInfo,
  touristTax,
  weatherByMonth,
  emergencyNumbers,
  hospitals,
  safetyAlerts,
  templeEtiquette,
  accommodationGuide,
} from '../data/bali-data'

export default function BaliGuide() {
  const { hash } = useLocation()
  const [activeSection, setActiveSection] = useState('overview')
  const [forceOpenIds, setForceOpenIds] = useState(new Set())
  const sectionRefs = useRef({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Handle URL hash on mount
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

  // Track which section is in view
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
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Ulun_Danu_Beratan_Temple.jpg/1024px-Ulun_Danu_Beratan_Temple.jpg"
        alt="バリ島 ウルン・ダヌ・ブラタン寺院"
        overlay
      >
        <span className="text-xs font-bold bg-sunset-600 px-3 py-1 rounded-full inline-block mb-2">
          完全ガイド
        </span>
        <h1 className="text-2xl font-black">バリ島</h1>
        <p className="text-sm opacity-90 mt-1">神々の島 — エリア・交通・宿泊・実用情報</p>
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
          インドネシア唯一のヒンドゥー教の島。ジャワ島東端のケタパン港からフェリーで30分、
          ギリマヌク港に到着する。火山と棚田とビーチと寺院が凝縮した「神々の島」。
          バリ・ヒンドゥーの独自文化、壮大な寺院群、世界有数のサーフスポット、
          そして色とりどりの供物が溢れる日常の風景が待っている。
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

        {/* Quick facts */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {overviewFacts.map((f) => (
            <div key={f.label} className="bg-sand-50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-gray-500">{f.label}</p>
              <p className="text-xs font-bold">{f.value}</p>
            </div>
          ))}
        </div>

        {/* Tourist tax alert */}
        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3">
          <p className="text-xs font-bold text-red-800 mb-1">バリ観光税（必須）</p>
          <p className="text-xs text-red-700">
            全外国人に <span className="font-bold">{touristTax.amount}</span> の観光税が課せられます（2024年2月〜）。
            事前に <span className="font-bold">lovebali.baliprov.go.id</span> でオンライン支払いが推奨。
          </p>
        </div>

        {/* Map */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">バリ島 エリアマップ</h3>
          <RouteMap spots={mapSpots} pois={mapPois} height="350px" />
        </div>

        <div className="mt-4 space-y-3">
          {/* History */}
          <Accordion
            id="overview-history"
            title="バリの歴史"
            subtitle="ヒンドゥー王国〜現代"
            icon="📜"
            forceOpen={forceOpenIds.has('overview-history')}
          >
            <div className="space-y-3 mt-1">
              {historyTimeline.map((h) => (
                <div key={h.era} className="flex gap-3">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-ocean-600 bg-ocean-50 px-1.5 py-0.5 rounded-full whitespace-nowrap">{h.era}</span>
                    <div className="w-px flex-1 bg-sand-300 mt-1" />
                  </div>
                  <div className="flex-1 pb-1">
                    <p className="text-xs font-bold text-gray-800">{h.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Culture */}
          <Accordion
            id="overview-culture"
            title="バリ・ヒンドゥー文化"
            subtitle="トリ・ヒタ・カラナ、ニュピ、ガルンガン..."
            icon="🙏"
            forceOpen={forceOpenIds.has('overview-culture')}
          >
            <div className="space-y-3 mt-1">
              {cultureInfo.map((c) => (
                <div key={c.id} className="bg-sand-50 rounded-xl p-3">
                  <p className="text-xs font-bold text-gray-800">{c.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Caste system */}
          <Accordion
            id="overview-caste"
            title="バリのカースト制度"
            subtitle="チャトゥル・ワルナ（4階層）"
            icon="👑"
            forceOpen={forceOpenIds.has('overview-caste')}
          >
            <div className="overflow-x-auto -mx-4 px-4 mt-1">
              <table className="w-full text-xs border-collapse min-w-[360px]">
                <thead>
                  <tr className="bg-sand-100">
                    <th className="text-left p-1.5 font-bold">カースト</th>
                    <th className="text-left p-1.5 font-bold">色</th>
                    <th className="text-left p-1.5 font-bold">役割</th>
                    <th className="text-left p-1.5 font-bold">名前の称号例</th>
                  </tr>
                </thead>
                <tbody>
                  {casteSystem.map((c) => (
                    <tr key={c.caste} className="border-t border-sand-200">
                      <td className="p-1.5 font-bold">{c.caste}</td>
                      <td className="p-1.5">{c.color}</td>
                      <td className="p-1.5">{c.role}</td>
                      <td className="p-1.5 text-[10px]">{c.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">
              スードラ（Sudra）が人口の約85%を占める最大の階層。現代では職業による区別は薄れてきているが、
              儀式・結婚・言語使用（クラマ語 / ビアサ語）に影響が残る
            </p>
          </Accordion>
        </div>
      </div>

      {/* ===== AREAS ===== */}
      <div id="areas" ref={(el) => (sectionRefs.current.areas = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">エリアガイド</h2>
        <p className="text-xs text-gray-500 mb-4">13エリアの特徴・料金相場・主要スポット</p>

        <div className="space-y-3">
          {areas.map((area) => (
            <Accordion
              key={area.id}
              id={`area-${area.id}`}
              title={area.name}
              subtitle={area.tagline}
              icon="📍"
              badge={area.priceLevel}
              forceOpen={forceOpenIds.has(`area-${area.id}`)}
            >
              <p className="text-xs text-gray-700 mt-1 leading-relaxed">{area.character}</p>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-ocean-50 rounded-lg p-2">
                  <p className="text-[10px] text-gray-500">おすすめの人</p>
                  <p className="text-[10px] font-bold text-gray-800">{area.bestFor}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-2">
                  <p className="text-[10px] text-gray-500">宿泊相場</p>
                  <p className="text-[10px] font-bold text-gray-800">{area.accommodation}</p>
                </div>
              </div>

              {/* Distances */}
              {area.distances && (
                <div className="mt-2">
                  <p className="text-[10px] font-bold text-gray-600 mb-1">主要距離</p>
                  <div className="grid grid-cols-2 gap-1">
                    {Object.entries(area.distances).map(([key, val]) => (
                      <div key={key} className="text-[10px] text-gray-600 bg-sand-50 rounded px-1.5 py-1">
                        <span className="font-bold">{key.replace('to', '→ ')}: </span>{val}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key landmarks */}
              <div className="mt-2">
                <p className="text-[10px] font-bold text-gray-600 mb-1">主要スポット</p>
                <ul className="space-y-0.5">
                  {area.keyLandmarks.map((l, i) => (
                    <li key={i} className="text-[10px] text-gray-700">
                      <span className="text-sunset-600 mr-1">&#9679;</span>{l}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special fields */}
              {area.coworking && (
                <div className="mt-2 bg-ocean-50 rounded-lg p-2">
                  <p className="text-[10px] font-bold text-ocean-800">コワーキング</p>
                  <p className="text-[10px] text-gray-700">{area.coworking}</p>
                </div>
              )}
              {area.seafoodDinner && (
                <div className="mt-2 bg-sunset-50 rounded-lg p-2">
                  <p className="text-[10px] font-bold text-sunset-700">シーフードディナー相場</p>
                  <p className="text-[10px] text-gray-700">{area.seafoodDinner}</p>
                </div>
              )}
              {area.divingPrices && (
                <div className="mt-2 bg-ocean-50 rounded-lg p-2">
                  <p className="text-[10px] font-bold text-ocean-800">ダイビング料金</p>
                  <p className="text-[10px] text-gray-700">{area.divingPrices}</p>
                </div>
              )}
              {area.access && (
                <div className="mt-2 bg-sand-50 rounded-lg p-2">
                  <p className="text-[10px] font-bold text-gray-600">アクセス</p>
                  <p className="text-[10px] text-gray-700">{area.access}</p>
                </div>
              )}
              {area.entryFee && (
                <p className="text-[10px] text-red-700 font-bold mt-1">{area.entryFee}</p>
              )}

              {area.tips && (
                <p className="text-[10px] text-gray-500 mt-2 italic">{area.tips}</p>
              )}
            </Accordion>
          ))}
        </div>
      </div>

      {/* ===== TRANSPORT ===== */}
      <div id="transport" ref={(el) => (sectionRefs.current.transport = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">交通ガイド</h2>
        <p className="text-xs text-gray-500 mb-4">ギリマヌクから各地への移動、島内交通</p>

        <div className="space-y-3">
          {/* Gilimanuk distances */}
          <Accordion
            id="transport-gilimanuk"
            title="ギリマヌクから各地への距離"
            subtitle="フェリー到着後の移動"
            icon="🚐"
            defaultOpen
            forceOpen={forceOpenIds.has('transport-gilimanuk')}
          >
            <div className="overflow-x-auto -mx-4 px-4 mt-1">
              <table className="w-full text-xs border-collapse min-w-[340px]">
                <thead>
                  <tr className="bg-sand-100">
                    <th className="text-left p-1.5 font-bold">目的地</th>
                    <th className="text-left p-1.5 font-bold">距離</th>
                    <th className="text-left p-1.5 font-bold">所要時間</th>
                  </tr>
                </thead>
                <tbody>
                  {gilimanukDistances.map((d) => (
                    <tr key={d.destination} className="border-t border-sand-200">
                      <td className="p-1.5 font-bold">{d.destination}</td>
                      <td className="p-1.5">{d.distance}</td>
                      <td className="p-1.5">{d.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[10px] font-bold text-gray-600 mt-3 mb-1">ギリマヌクからの移動手段</p>
            <div className="space-y-1.5">
              {gilimanukTransportOptions.map((opt) => (
                <div key={opt.mode} className="bg-sand-50 rounded-lg p-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-gray-800">{opt.mode}</span>
                    <span className="text-xs font-bold text-sunset-600">{opt.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{opt.time} / {opt.note}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Airport */}
          <Accordion
            id="transport-airport"
            title={`${airportInfo.name}`}
            subtitle={`コード: ${airportInfo.code}`}
            icon="✈️"
            forceOpen={forceOpenIds.has('transport-airport')}
          >
            <div className="mt-1 space-y-2">
              <p className="text-xs text-gray-700">{airportInfo.location}</p>
              <p className="text-xs text-gray-700">{airportInfo.terminals}</p>

              <p className="text-[10px] font-bold text-gray-600 mt-2 mb-1">空港から各エリアへ</p>
              <div className="grid grid-cols-2 gap-1">
                {airportInfo.distanceToCities.map((c) => (
                  <div key={c.city} className="bg-sand-50 rounded px-1.5 py-1 text-[10px]">
                    <span className="font-bold">{c.city}</span>: {c.time}
                  </div>
                ))}
              </div>

              <p className="text-[10px] font-bold text-gray-600 mt-2 mb-1">空港からの移動手段</p>
              {airportInfo.transportOptions.map((t) => (
                <div key={t.mode} className="bg-sand-50 rounded-lg p-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold">{t.mode}</span>
                    <span className="text-[10px] font-bold text-sunset-600">{t.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{t.note}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Grab / GoJek */}
          <Accordion
            id="transport-ridehailing"
            title="Grab / GoJek（配車アプリ）"
            subtitle="南バリで最も便利な移動手段"
            icon="📱"
            forceOpen={forceOpenIds.has('transport-ridehailing')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 mb-2">{rideHailing.availability}</p>

              <p className="text-[10px] font-bold text-gray-600 mb-1">主な料金目安（GrabCar）</p>
              {rideHailing.typicalFares.map((f) => (
                <div key={f.route} className="flex justify-between text-[10px] text-gray-700 bg-sand-50 rounded px-2 py-1 mb-1">
                  <span>{f.route}</span>
                  <span className="font-bold text-sunset-600">{f.fare}</span>
                </div>
              ))}

              <div className="mt-2 bg-ocean-50 rounded-lg p-2">
                <p className="text-[10px] font-bold text-ocean-800 mb-1">注意点</p>
                {rideHailing.notes.map((n, i) => (
                  <p key={i} className="text-[10px] text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{n}
                  </p>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Scooter */}
          <Accordion
            id="transport-scooter"
            title="バイク / スクーターレンタル"
            subtitle="Rp 70,000〜/日（IDP必須）"
            icon="🏍️"
            variant="warning"
            forceOpen={forceOpenIds.has('transport-scooter')}
          >
            <div className="mt-1">
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full text-[10px] border-collapse min-w-[340px]">
                  <thead>
                    <tr className="bg-sand-100">
                      <th className="text-left p-1.5 font-bold">車種</th>
                      <th className="text-left p-1.5 font-bold">日額</th>
                      <th className="text-left p-1.5 font-bold">週額</th>
                      <th className="text-left p-1.5 font-bold">月額</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scooterRental.priceRange.map((s) => (
                      <tr key={s.model} className="border-t border-sand-200">
                        <td className="p-1.5 font-bold">{s.model}</td>
                        <td className="p-1.5">{s.daily}</td>
                        <td className="p-1.5">{s.weekly}</td>
                        <td className="p-1.5">{s.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-2 bg-red-50 rounded-lg p-2">
                <p className="text-[10px] font-bold text-red-700 mb-1">必須書類</p>
                {scooterRental.requirements.map((r, i) => (
                  <p key={i} className="text-[10px] text-red-700">
                    <span className="mr-1">&#9679;</span>{r}
                  </p>
                ))}
              </div>

              <div className="mt-2 bg-red-50 rounded-lg p-2">
                <p className="text-[10px] font-bold text-red-700 mb-1">罰則</p>
                {scooterRental.penalties.map((p, i) => (
                  <p key={i} className="text-[10px] text-red-700">
                    <span className="mr-1">&#9679;</span>{p}
                  </p>
                ))}
              </div>

              <div className="mt-2 bg-yellow-50 rounded-lg p-2">
                <p className="text-[10px] font-bold text-yellow-800 mb-1">警告</p>
                {scooterRental.warnings.map((w, i) => (
                  <p key={i} className="text-[10px] text-yellow-800">
                    <span className="mr-1">&#9679;</span>{w}
                  </p>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Private driver */}
          <Accordion
            id="transport-driver"
            title="プライベートドライバー"
            subtitle={privateDriver.dailyRate}
            icon="🚗"
            forceOpen={forceOpenIds.has('transport-driver')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 mb-2">{privateDriver.includes}</p>

              <p className="text-[10px] font-bold text-gray-600 mb-1">車種別料金</p>
              {privateDriver.vehicles.map((v) => (
                <div key={v.type} className="flex justify-between text-[10px] bg-sand-50 rounded px-2 py-1 mb-1">
                  <span>{v.type}</span>
                  <span className="font-bold text-sunset-600">{v.price}</span>
                </div>
              ))}

              <div className="mt-2 space-y-0.5">
                {privateDriver.tips.map((t, i) => (
                  <p key={i} className="text-[10px] text-gray-600">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{t}
                  </p>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Perama */}
          <Accordion
            id="transport-perama"
            title="Perama シャトルバス"
            subtitle="バックパッカー御用達の定期バス"
            icon="🚌"
            forceOpen={forceOpenIds.has('transport-perama')}
          >
            <div className="mt-1">
              <p className="text-[10px] text-gray-600 mb-2">
                TEL: {peramaShuttle.phone} / {peramaShuttle.website} / {peramaShuttle.booking}
              </p>

              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full text-[10px] border-collapse min-w-[300px]">
                  <thead>
                    <tr className="bg-sand-100">
                      <th className="text-left p-1.5 font-bold">路線</th>
                      <th className="text-left p-1.5 font-bold">料金</th>
                      <th className="text-left p-1.5 font-bold">時間</th>
                    </tr>
                  </thead>
                  <tbody>
                    {peramaShuttle.routes.map((r) => (
                      <tr key={r.from + r.to} className="border-t border-sand-200">
                        <td className="p-1.5 font-bold">{r.from} → {r.to}</td>
                        <td className="p-1.5">{r.price}</td>
                        <td className="p-1.5">{r.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">{peramaShuttle.departures}</p>
            </div>
          </Accordion>

          {/* Kura-Kura */}
          <Accordion
            id="transport-kurakura"
            title="Kura-Kura バス"
            subtitle="Rp 20,000〜 / エアコン+WiFi付き"
            icon="🐢"
            forceOpen={forceOpenIds.has('transport-kurakura')}
          >
            <div className="mt-1">
              <p className="text-[10px] text-gray-600 mb-2">
                {kuraKuraBus.website} / 運行: {kuraKuraBus.operatingHours} / {kuraKuraBus.frequency}
              </p>

              <p className="text-[10px] font-bold text-gray-600 mb-1">路線と料金</p>
              {kuraKuraBus.routes.filter(r => r.price).map((r) => (
                <div key={r.line} className="flex justify-between text-[10px] bg-sand-50 rounded px-2 py-1 mb-1">
                  <span>{r.line}</span>
                  <span className="font-bold text-sunset-600">{r.price}</span>
                </div>
              ))}

              <p className="text-[10px] font-bold text-gray-600 mt-2 mb-1">パス</p>
              {kuraKuraBus.passes.map((p) => (
                <div key={p.type} className="flex justify-between text-[10px] bg-sand-50 rounded px-2 py-1 mb-1">
                  <span>{p.type}</span>
                  <span className="font-bold">{p.price}</span>
                </div>
              ))}

              <div className="mt-2 flex flex-wrap gap-1">
                {kuraKuraBus.features.map((f, i) => (
                  <span key={i} className="text-[10px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">{f}</span>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Bluebird */}
          <Accordion
            id="transport-bluebird"
            title="Bluebird タクシー（メーター制）"
            subtitle={`初乗り ${bluebirdTaxi.flagDown} / ${bluebirdTaxi.perKm}/km`}
            icon="🚕"
            forceOpen={forceOpenIds.has('transport-bluebird')}
          >
            <div className="mt-1">
              <p className="text-[10px] text-gray-600 mb-2">
                TEL: {bluebirdTaxi.phone} / アプリ: {bluebirdTaxi.app}
              </p>
              {bluebirdTaxi.features.map((f, i) => (
                <p key={i} className="text-[10px] text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{f}
                </p>
              ))}
            </div>
          </Accordion>

          {/* Fast boats */}
          <Accordion
            id="transport-fastboat"
            title="ファストボート（ヌサ島・ギリ島）"
            subtitle="サヌール港から出発"
            icon="🚤"
            forceOpen={forceOpenIds.has('transport-fastboat')}
          >
            <div className="mt-1">
              <p className="text-[10px] font-bold text-gray-600 mb-1">ヌサ島（サヌール発）</p>
              {fastBoats.nusaIslands.map((b) => (
                <div key={b.route} className="bg-sand-50 rounded-lg p-2 mb-1.5">
                  <p className="text-xs font-bold text-gray-800">{b.route}</p>
                  <p className="text-[10px] text-gray-600">所要: {b.time} / 料金: <span className="font-bold text-sunset-600">{b.price}</span></p>
                  <p className="text-[10px] text-gray-500">出発: {b.departures}</p>
                </div>
              ))}

              <p className="text-[10px] font-bold text-gray-600 mt-3 mb-1">ギリ島</p>
              {fastBoats.giliIslands.map((b) => (
                <div key={b.route} className="bg-sand-50 rounded-lg p-2 mb-1.5">
                  <p className="text-xs font-bold text-gray-800">{b.route}</p>
                  <p className="text-[10px] text-gray-600">所要: {b.time} / 料金: <span className="font-bold text-sunset-600">{b.price}</span></p>
                  <p className="text-[10px] text-gray-500">毎日{b.departures}。主要会社: {b.operators}</p>
                </div>
              ))}

              <div className="mt-2 bg-ocean-50 rounded-lg p-2">
                <p className="text-[10px] font-bold text-ocean-800 mb-1">Tips</p>
                {fastBoats.tips.map((t, i) => (
                  <p key={i} className="text-[10px] text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{t}
                  </p>
                ))}
              </div>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== PRACTICAL INFO ===== */}
      <div id="practical" ref={(el) => (sectionRefs.current.practical = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">実用情報</h2>
        <p className="text-xs text-gray-500 mb-4">お金・SIM・天気・寺院マナー・緊急連絡先</p>

        <div className="space-y-3">
          {/* Money */}
          <Accordion
            id="practical-money"
            title="お金・ATM・両替・QRIS"
            subtitle="キャッシュレス化が急速に進行中"
            icon="💰"
            forceOpen={forceOpenIds.has('practical-money')}
          >
            <div className="mt-1 space-y-3">
              <div>
                <p className="text-[10px] font-bold text-gray-600 mb-1">ATM</p>
                {moneyInfo.atms.map((a, i) => (
                  <p key={i} className="text-[10px] text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{a}
                  </p>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-600 mb-1">両替</p>
                {moneyInfo.moneyChangers.map((m, i) => (
                  <p key={i} className="text-[10px] text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{m}
                  </p>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-600 mb-1">QRIS（キャッシュレス決済）</p>
                {moneyInfo.qris.map((q, i) => (
                  <p key={i} className="text-[10px] text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{q}
                  </p>
                ))}
              </div>
              <div className="bg-sand-50 rounded-lg p-2">
                <p className="text-[10px] font-bold text-gray-600 mb-1">一般的なTips</p>
                {moneyInfo.tips.map((t, i) => (
                  <p key={i} className="text-[10px] text-gray-700">
                    <span className="text-sunset-600 mr-1">&#9679;</span>{t}
                  </p>
                ))}
              </div>
            </div>
          </Accordion>

          {/* SIM cards */}
          <Accordion
            id="practical-sim"
            title="SIMカード / eSIM"
            subtitle="Telkomselが最も安定"
            icon="📶"
            forceOpen={forceOpenIds.has('practical-sim')}
          >
            <div className="space-y-2 mt-1">
              {simCardInfo.map((s) => (
                <div key={s.carrier} className="bg-sand-50 rounded-xl p-3">
                  <p className="text-xs font-bold text-gray-800">{s.carrier}</p>
                  <p className="text-[10px] text-gray-700 mt-0.5">{s.plan}</p>
                  <p className="text-[10px] font-bold text-sunset-600">{s.price}</p>
                  <p className="text-[10px] text-gray-500">カバレッジ: {s.coverage}</p>
                  <p className="text-[10px] text-gray-500">購入場所: {s.where}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Weather */}
          <Accordion
            id="practical-weather"
            title="月別気候ガイド"
            subtitle="乾季: 5-10月 / 雨季: 11-4月"
            icon="🌤️"
            forceOpen={forceOpenIds.has('practical-weather')}
          >
            <div className="overflow-x-auto -mx-4 px-4 mt-1">
              <table className="w-full text-[10px] border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-sand-100">
                    <th className="text-left p-1.5 font-bold">月</th>
                    <th className="text-left p-1.5 font-bold">気温</th>
                    <th className="text-left p-1.5 font-bold">降水量</th>
                    <th className="text-left p-1.5 font-bold">季節</th>
                    <th className="text-left p-1.5 font-bold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherByMonth.map((w) => (
                    <tr key={w.month} className={`border-t border-sand-200 ${w.season === '乾季' ? 'bg-blue-50' : w.season === '雨季' ? 'bg-gray-50' : ''}`}>
                      <td className="p-1.5 font-bold">{w.month}</td>
                      <td className="p-1.5">{w.temp}</td>
                      <td className="p-1.5">{w.rain}</td>
                      <td className="p-1.5">
                        <span className={`px-1 py-0.5 rounded-full text-[9px] font-bold ${
                          w.season === '乾季' ? 'bg-blue-100 text-blue-800' :
                          w.season === '雨季' ? 'bg-gray-200 text-gray-700' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>{w.season}</span>
                      </td>
                      <td className="p-1.5">{w.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Accordion>

          {/* Temple etiquette */}
          <Accordion
            id="practical-etiquette"
            title="寺院マナー・エチケット"
            subtitle="サロン着用、供物を踏まない、左手注意"
            icon="🛕"
            forceOpen={forceOpenIds.has('practical-etiquette')}
          >
            <div className="space-y-2 mt-1">
              {templeEtiquette.map((e) => (
                <div key={e.rule} className="flex gap-2">
                  <span className="text-[10px] font-bold text-ocean-600 bg-ocean-50 px-1.5 py-0.5 rounded-full flex-shrink-0 mt-0.5 h-fit">
                    {e.rule}
                  </span>
                  <p className="text-[10px] text-gray-700 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Emergency */}
          <Accordion
            id="practical-emergency"
            title="緊急連絡先・病院"
            subtitle="112 = 総合緊急番号"
            icon="🚨"
            forceOpen={forceOpenIds.has('practical-emergency')}
          >
            <div className="mt-1">
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full text-[10px] border-collapse min-w-[300px]">
                  <thead>
                    <tr className="bg-sand-100">
                      <th className="text-left p-1.5 font-bold">サービス</th>
                      <th className="text-left p-1.5 font-bold">番号</th>
                      <th className="text-left p-1.5 font-bold">備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emergencyNumbers.map((e) => (
                      <tr key={e.service} className="border-t border-sand-200">
                        <td className="p-1.5 font-bold">{e.service}</td>
                        <td className="p-1.5 font-bold text-red-700">{e.number}</td>
                        <td className="p-1.5">{e.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[10px] font-bold text-gray-600 mt-3 mb-1">主要病院（外国人対応）</p>
              {hospitals.map((h) => (
                <div key={h.name} className="bg-sand-50 rounded-lg p-2 mb-1.5">
                  <p className="text-[10px] font-bold text-gray-800">{h.name}</p>
                  <p className="text-[10px] text-gray-600">{h.address}</p>
                  <p className="text-[10px] font-bold text-red-700">{h.phone} / {h.hours}</p>
                  <p className="text-[10px] text-gray-500">{h.features}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== ACCOMMODATION ===== */}
      <div id="stay" ref={(el) => (sectionRefs.current.stay = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">宿泊ガイド</h2>

        <div className="space-y-3">
          {/* Price ranges */}
          <div className="grid grid-cols-1 gap-2 mb-2">
            {[
              { key: 'budget', label: 'バジェット', emoji: '🏠', data: accommodationGuide.budget },
              { key: 'midRange', label: 'ミドルレンジ', emoji: '🏨', data: accommodationGuide.midRange },
              { key: 'luxury', label: 'ラグジュアリー', emoji: '🏰', data: accommodationGuide.luxury },
            ].map(({ key, label, emoji, data }) => (
              <div key={key} className="bg-sand-50 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{emoji}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{label}</p>
                    <p className="text-xs font-bold text-sunset-600">{data.range}</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-600">{data.description}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">おすすめエリア: {data.bestAreas}</p>
              </div>
            ))}
          </div>

          {/* By traveler type */}
          <Accordion
            id="stay-type"
            title="旅行者タイプ別おすすめエリア"
            subtitle="バックパッカー〜ハネムーン"
            icon="🗺️"
            defaultOpen
            forceOpen={forceOpenIds.has('stay-type')}
          >
            <div className="space-y-1.5 mt-1">
              {accommodationGuide.byTravelerType.map((t) => (
                <div key={t.type} className="bg-sand-50 rounded-lg p-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-gray-800">{t.type}</span>
                    <span className="text-[10px] font-bold text-ocean-600">{t.areas}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{t.reason}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Booking tips */}
          <Accordion
            id="stay-tips"
            title="予約のコツ"
            subtitle="ベストタイミング・割引テク"
            icon="💡"
            forceOpen={forceOpenIds.has('stay-tips')}
          >
            <div className="space-y-1 mt-1">
              {accommodationGuide.bookingTips.map((t, i) => (
                <p key={i} className="text-[10px] text-gray-700">
                  <span className="text-ocean-600 font-bold mr-1">{i + 1}.</span>{t}
                </p>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== SAFETY ===== */}
      <div id="safety" ref={(el) => (sectionRefs.current.safety = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">安全情報</h2>

        <SafetyAlerts
          alerts={safetyAlerts.filter(a => a.level === 'critical').map(a => ({
            spot: a.category,
            warning: a.desc,
          }))}
        />

        <div className="space-y-2 mt-4">
          {safetyAlerts.filter(a => a.level !== 'critical').map((a) => (
            <div
              key={a.category}
              className={`rounded-xl p-3 border ${
                a.level === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-sand-50 border-sand-200'
              }`}
            >
              <p className={`text-xs font-bold ${a.level === 'warning' ? 'text-yellow-800' : 'text-gray-800'}`}>
                {a.category}
              </p>
              <p className="text-[10px] text-gray-700 mt-0.5 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Back link */}
      <div className="px-4 pb-6 text-center">
        <Link to="/" className="text-ocean-600 text-xs underline">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
