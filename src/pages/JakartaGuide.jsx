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
  airportInfo,
  airportToCity,
  bniToGambir,
  gambirInfo,
  lockerPrices,
  boardingProcess,
  jakartaToBandung,
  trainBookingTips,
  trainBookingGeneral,
  quickSightseeing,
  modelCourse,
  signatureDishes,
  restaurants,
  practicalInfo,
  safetyAlerts,
  emergencyContacts,
  modelSchedules,
  costEstimate,
  survivalPhrases,
  weatherInfo,
} from '../data/jakarta-data'

export default function JakartaGuide() {
  const { hash } = useLocation()
  const [activeSection, setActiveSection] = useState('overview')
  const [forceOpenIds, setForceOpenIds] = useState(new Set())
  const sectionRefs = useRef({})

  useEffect(() => { window.scrollTo(0, 0) }, [])

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
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    )
    Object.values(sectionRefs.current).forEach((el) => { if (el) observer.observe(el) })
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
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Monumen_Nasional%2C_Jakarta.jpg/1024px-Monumen_Nasional%2C_Jakarta.jpg"
        alt="モナス（独立記念塔）"
        overlay
      >
        <span className="text-xs font-bold bg-gray-600 px-3 py-1 rounded-full inline-block mb-2">
          トランジットガイド
        </span>
        <h1 className="text-2xl font-black">ジャカルタ</h1>
        <p className="text-sm opacity-90 mt-1">空港→ガンビル駅→バンドンへの鉄道移動</p>
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
          ジャカルタはインドネシアの首都（人口約1,080万人、首都圏3,400万人）。
          この旅ではDay 1のトランジット地点として、スカルノハッタ空港からガンビル駅へ移動し、
          パラヒャンガン号でバンドンへ向かう。列車の待ち時間にモナス（独立記念塔）を見るのもおすすめ。
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

        {/* Day 1 cost estimate */}
        <div className="mt-4 bg-sand-50 rounded-xl p-3 border border-sand-200">
          <p className="text-xs font-bold text-gray-800 mb-2">Day 1 費用概算</p>
          <div className="space-y-1">
            {costEstimate.map((c) => (
              <div key={c.item} className="flex justify-between text-xs">
                <span className="text-gray-600">{c.item}</span>
                <span className="font-bold">IDR {c.idr.toLocaleString()}<span className="text-gray-400 ml-1">({c.jpy.toLocaleString()}円)</span></span>
              </div>
            ))}
            <div className="border-t border-sand-300 pt-1 mt-1 flex justify-between text-xs font-bold">
              <span>合計</span>
              <span className="text-sunset-600">
                約IDR {costEstimate.reduce((s, c) => s + c.idr, 0).toLocaleString()}
                <span className="text-gray-500 ml-1">
                  (約{costEstimate.reduce((s, c) => s + c.jpy, 0).toLocaleString()}円)
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Model schedules */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Day 1 モデルスケジュール</h3>
          <div className="space-y-3">
            {modelSchedules.map((schedule) => (
              <Accordion
                key={schedule.id}
                id={schedule.id}
                title={schedule.title}
                subtitle={schedule.desc}
                icon="📋"
                forceOpen={forceOpenIds.has(schedule.id)}
              >
                <div className="space-y-2 mt-1">
                  {schedule.steps.map((s, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[10px] font-bold text-ocean-600 flex-shrink-0 w-10 mt-0.5">{s.time}</span>
                      <p className="text-xs text-gray-700">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-4">
          <RouteMap spots={mapSpots} pois={mapPois} height="350px" />
        </div>
      </div>

      {/* ===== AIRPORT ===== */}
      <div id="airport" ref={(el) => (sectionRefs.current.airport = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">スカルノ・ハッタ国際空港 (CGK)</h2>
        <p className="text-xs text-gray-500 mb-4">ターミナル3が国際線メイン。日本からの直行便はすべてT3到着</p>

        <div className="space-y-3">
          {/* Terminal info */}
          <Accordion
            id="airport-terminals"
            title="ターミナル案内"
            subtitle="T1/T2/T3"
            icon="✈️"
            forceOpen={forceOpenIds.has('airport-terminals')}
          >
            <div className="space-y-1.5 mt-1">
              {airportInfo.terminals.map((t) => (
                <div key={t.name} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{t.name}</span>
                  <span className="text-gray-500 ml-1">-- {t.airlines}</span>
                  <span className="block text-gray-600 text-[10px]">{t.note}</span>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Arrival flow */}
          <Accordion
            id="airport-arrival"
            title="到着の流れ（T3 国際線）"
            subtitle="降機→VOA→入国審査→到着ロビー"
            icon="🛬"
            defaultOpen
            forceOpen={forceOpenIds.has('airport-arrival')}
          >
            <div className="space-y-2 mt-1">
              {airportInfo.arrivalFlow.map((item) => (
                <div key={item.step} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-sunset-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
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

          {/* All Indonesia Arrival Card */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-3">
            <p className="text-xs font-bold text-red-800">必須: All Indonesia Arrival Card</p>
            <p className="text-xs text-red-700 mt-1">
              {airportInfo.arrivalCard.since}より義務化。到着3日前から
              <a href={airportInfo.arrivalCard.url} target="_blank" rel="noopener noreferrer" className="underline font-bold"> all-indonesia.com </a>
              で事前登録。パスポート情報・滞在先・フライト情報を入力し、QRコードを取得しておくこと。
            </p>
          </div>

          {/* VOA */}
          <Accordion
            id="airport-voa"
            title="VOA（到着ビザ）"
            subtitle={airportInfo.voa.fee}
            icon="🛂"
            variant="warning"
            forceOpen={forceOpenIds.has('airport-voa')}
          >
            <div className="space-y-1.5 mt-1">
              <div className="bg-sand-50 rounded-lg p-2 text-xs">
                <span className="font-bold">費用:</span> {airportInfo.voa.fee}
              </div>
              <div className="bg-sand-50 rounded-lg p-2 text-xs">
                <span className="font-bold">支払方法:</span> {airportInfo.voa.payment}
              </div>
              <div className="bg-sand-50 rounded-lg p-2 text-xs">
                <span className="font-bold">必要書類:</span> {airportInfo.voa.requirements}
              </div>
              <div className="bg-sand-50 rounded-lg p-2 text-xs">
                <span className="font-bold">有効期間:</span> {airportInfo.voa.duration}
              </div>
              <div className="bg-sand-50 rounded-lg p-2 text-xs">
                <span className="font-bold">所要時間:</span> {airportInfo.voa.waitTime}
              </div>
              <p className="text-[10px] text-gray-500 mt-1">
                e-VOA事前申請: {airportInfo.voa.eVoa}
              </p>
            </div>
          </Accordion>

          {/* SIM Cards */}
          <Accordion
            id="airport-sim"
            title="SIMカード購入"
            subtitle="Telkomsel IDR 150,000推奨"
            icon="📱"
            forceOpen={forceOpenIds.has('airport-sim')}
          >
            <div className="space-y-2 mt-1">
              {airportInfo.simCards.map((s) => (
                <div key={s.provider} className={`rounded-xl border p-3 ${s.recommended ? 'border-green-300 bg-green-50' : 'border-sand-200'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {s.recommended && (
                      <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full font-bold">推奨</span>
                    )}
                    <p className="text-xs font-bold">{s.provider}</p>
                  </div>
                  <p className="text-xs text-sunset-600 font-bold">{s.price} / {s.data}</p>
                  <p className="text-[10px] text-gray-500">{s.location}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{s.note}</p>
                </div>
              ))}
              <div className="mt-2 space-y-1">
                {airportInfo.simTips.map((tip, i) => (
                  <p key={i} className="text-[10px] text-gray-600">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{tip}
                  </p>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Money exchange */}
          <Accordion
            id="airport-money"
            title="両替・ATM"
            icon="💰"
            forceOpen={forceOpenIds.has('airport-money')}
          >
            <ul className="mt-1 space-y-1">
              {airportInfo.moneyExchange.map((item, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{item}
                </li>
              ))}
            </ul>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {airportInfo.exchangeRates.map((r) => (
                <div key={r.from} className="bg-sand-50 rounded-lg p-1.5 text-center">
                  <p className="text-[10px] text-gray-500">{r.from}</p>
                  <p className="text-[10px] font-bold">{r.to}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Airport tips */}
          <Accordion
            id="airport-tips"
            title="空港Tips"
            icon="💡"
            forceOpen={forceOpenIds.has('airport-tips')}
          >
            <ul className="mt-1 space-y-1">
              {airportInfo.airportTips.map((item, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-sunset-600 mr-1">&#9679;</span>{item}
                </li>
              ))}
            </ul>
          </Accordion>
        </div>
      </div>

      {/* ===== TRANSPORT ===== */}
      <div id="transport" ref={(el) => (sectionRefs.current.transport = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">空港 → ガンビル駅</h2>
        <p className="text-xs text-gray-500 mb-4">渋滞を避けるなら空港鉄道+Grabが最も時間が読める</p>

        <div className="space-y-3">
          {airportToCity.map((t) => (
            <Accordion
              key={t.id}
              id={`transport-${t.id}`}
              title={t.name}
              subtitle={`${t.price} / ${t.duration}`}
              icon="🚆"
              badge={t.recommended ? 'おすすめ' : undefined}
              variant={t.recommended ? 'highlight' : undefined}
              defaultOpen={t.recommended}
              forceOpen={forceOpenIds.has(`transport-${t.id}`)}
            >
              <p className="text-xs text-gray-700 mt-1 mb-2">{t.route}</p>
              <div className="space-y-1">
                {t.steps.map((s, i) => (
                  <p key={i} className="text-xs text-gray-600">
                    <span className="text-ocean-600 font-bold mr-1">{i + 1}.</span>{s}
                  </p>
                ))}
              </div>
              <p className="text-[10px] text-gray-500 mt-2">{t.note}</p>
            </Accordion>
          ))}

          {/* BNI City → Gambir */}
          <h3 className="text-sm font-bold text-gray-700 mt-4">BNI City駅 → ガンビル駅（約3km）</h3>
          <div className="space-y-1.5">
            {bniToGambir.map((t) => (
              <div key={t.method} className="bg-sand-50 rounded-lg p-2 text-xs">
                <span className="font-bold">{t.method}</span>
                <span className="text-sunset-600 ml-1">{t.fare}</span>
                <span className="text-gray-500 ml-1">({t.duration})</span>
                <span className="block text-gray-600 text-[10px]">{t.note}</span>
              </div>
            ))}
          </div>

          {/* Traffic warning */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-3">
            <p className="text-xs font-bold text-amber-800">渋滞注意</p>
            <p className="text-xs text-amber-700 mt-1">
              ジャカルタの渋滞は世界最悪レベル。特に朝7:00〜10:00、夕方16:00〜20:00は
              市内移動に通常の2〜3倍の時間がかかる。列車の出発時間が決まっている場合、
              空港鉄道（渋滞ゼロ）が最も確実。
            </p>
          </div>
        </div>
      </div>

      {/* ===== GAMBIR STATION ===== */}
      <div id="gambir" ref={(el) => (sectionRefs.current.gambir = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">ガンビル駅</h2>
        <p className="text-xs text-gray-500 mb-4">{gambirInfo.description}</p>

        <div className="space-y-3">
          {/* Facilities */}
          <Accordion
            id="gambir-facilities"
            title="駅施設一覧"
            subtitle="ロッカー・ATM・レストラン・WiFi"
            icon="🏢"
            defaultOpen
            forceOpen={forceOpenIds.has('gambir-facilities')}
          >
            <div className="space-y-1.5 mt-1">
              {gambirInfo.facilities.map((f) => (
                <div key={f.name} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{f.name}</span>
                  <span className="block text-gray-600 text-[10px]">{f.detail}</span>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Locker prices */}
          <Accordion
            id="gambir-lockers"
            title="荷物預かり料金（ロッカー）"
            subtitle="1階南門（Pintu Selatan）"
            icon="🧳"
            forceOpen={forceOpenIds.has('gambir-lockers')}
          >
            <table className="w-full text-[10px] border-collapse mt-1">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">サイズ</th>
                  <th className="text-left p-1.5 font-bold">1時間</th>
                  <th className="text-left p-1.5 font-bold">2時間</th>
                  <th className="text-left p-1.5 font-bold">12時間</th>
                  <th className="text-left p-1.5 font-bold">24時間</th>
                </tr>
              </thead>
              <tbody>
                {lockerPrices.map((l) => (
                  <tr key={l.size} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{l.size}</td>
                    <td className="p-1.5">{l.hour1}</td>
                    <td className="p-1.5">{l.hour2}</td>
                    <td className="p-1.5">{l.hour12}</td>
                    <td className="p-1.5">{l.hour24}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[10px] text-gray-500 mt-1">問い合わせ: +62 811-8802024</p>
          </Accordion>

          {/* Boarding process */}
          <Accordion
            id="gambir-boarding"
            title="乗車の流れ"
            subtitle="5ステップ"
            icon="🚂"
            forceOpen={forceOpenIds.has('gambir-boarding')}
          >
            <div className="space-y-2 mt-1">
              {boardingProcess.map((item) => (
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
        </div>
      </div>

      {/* ===== TRAINS ===== */}
      <div id="trains" ref={(el) => (sectionRefs.current.trains = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">ジャカルタ → バンドン 列車</h2>
        <p className="text-xs text-gray-500 mb-4">Parahyangan（パラヒャンガン）がガンビル駅発で最も便利</p>

        <div className="space-y-3">
          {jakartaToBandung.map((train) => (
            <Accordion
              key={train.id}
              id={`train-${train.id}`}
              title={train.name}
              subtitle={`${train.from} → ${train.to} / ${train.duration}`}
              icon="🚂"
              badge={train.recommended ? 'おすすめ' : undefined}
              variant={train.recommended ? 'highlight' : undefined}
              defaultOpen={train.recommended}
              forceOpen={forceOpenIds.has(`train-${train.id}`)}
            >
              {/* Class & fare table */}
              <div className="mt-1 mb-2">
                <p className="text-[10px] font-bold text-gray-600 mb-1">クラスと料金</p>
                {train.classes.map((c) => (
                  <div key={c.name} className="bg-sand-50 rounded-lg p-2 text-xs mb-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{c.name}</span>
                      <span className="text-sunset-600 font-bold text-[10px]">{c.fare}</span>
                    </div>
                    <span className="text-[10px] text-gray-500">{c.seats} / {c.features}</span>
                  </div>
                ))}
              </div>

              {/* Schedule (if available) */}
              {train.schedule && train.schedule.length > 0 && (
                <div className="mb-2">
                  <p className="text-[10px] font-bold text-gray-600 mb-1">ガンビル発 時刻表</p>
                  <table className="w-full text-[10px] border-collapse">
                    <thead>
                      <tr className="bg-sand-100">
                        <th className="text-left p-1.5 font-bold">列車番号</th>
                        <th className="text-left p-1.5 font-bold">発車</th>
                        <th className="text-left p-1.5 font-bold">到着</th>
                        <th className="text-left p-1.5 font-bold">所要</th>
                      </tr>
                    </thead>
                    <tbody>
                      {train.schedule.map((s) => (
                        <tr key={s.number} className="border-t border-sand-200">
                          <td className="p-1.5 font-bold">{s.number}</td>
                          <td className="p-1.5">{s.depart}</td>
                          <td className="p-1.5">{s.arrive}</td>
                          <td className="p-1.5">{s.duration}{s.note && <span className="text-gray-400 ml-1">{s.note}</span>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[10px] text-gray-400 mt-1">時刻は2025年2月GAPEKA（ダイヤ改正）に基づく。最新はTravelokaで確認</p>
                </div>
              )}

              {/* Train features */}
              {train.trainFeatures && train.trainFeatures.length > 0 && (
                <div className="mb-2">
                  <p className="text-[10px] font-bold text-gray-600 mb-1">設備・特徴</p>
                  {train.trainFeatures.map((f, i) => (
                    <p key={i} className="text-[10px] text-gray-600">
                      <span className="text-ocean-600 mr-1">&#9679;</span>{f}
                    </p>
                  ))}
                </div>
              )}

              {/* Scenery */}
              {train.scenery && (
                <div className="bg-green-50 rounded-lg p-2 text-[10px] text-green-800">
                  <span className="font-bold">車窓:</span> {train.scenery}
                </div>
              )}

              {/* Whoosh caveat */}
              {train.caveat && (
                <div className="bg-amber-50 rounded-lg p-2 text-[10px] text-amber-800 mt-1">
                  <span className="font-bold">注意:</span> {train.caveat}
                </div>
              )}
            </Accordion>
          ))}

          {/* Booking tips */}
          <Accordion
            id="train-booking"
            title="チケット予約方法"
            subtitle="Traveloka推奨"
            icon="🎫"
            forceOpen={forceOpenIds.has('train-booking')}
          >
            <div className="space-y-1.5 mt-1">
              {trainBookingTips.map((tip) => (
                <div key={tip.title} className={`rounded-lg border p-2 text-xs ${tip.title.includes('推奨') ? 'border-green-300 bg-green-50' : 'border-sand-200 bg-sand-50'}`}>
                  <span className="font-bold">{tip.title}</span>
                  <span className="block text-[10px] text-gray-600">{tip.desc}</span>
                </div>
              ))}
            </div>
          </Accordion>

          {/* General booking tips */}
          <Accordion
            id="train-general-tips"
            title="予約のコツ"
            icon="💡"
            forceOpen={forceOpenIds.has('train-general-tips')}
          >
            <div className="space-y-1 mt-1">
              {trainBookingGeneral.map((tip, i) => (
                <p key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 font-bold mr-1">{i + 1}.</span>{tip}
                </p>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== SIGHTSEEING ===== */}
      <div id="sightseeing" ref={(el) => (sectionRefs.current.sightseeing = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">列車待ちの間に</h2>
        <p className="text-xs text-gray-500 mb-4">ガンビル駅から徒歩圏内の見どころ。2〜3時間あれば回れる</p>

        {/* Model course highlight */}
        <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-4 mb-4">
          <p className="text-sm font-black text-gray-800 mb-2">{modelCourse.title}</p>
          <div className="space-y-2">
            {modelCourse.steps.map((s, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="w-5 h-5 rounded-full bg-ocean-600 text-white flex items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </span>
                  {i < modelCourse.steps.length - 1 && <div className="w-px flex-1 bg-ocean-300 mt-0.5" />}
                </div>
                <div className="flex-1 pb-1">
                  {s.time && <p className="text-[10px] text-ocean-600 font-medium">{s.time}</p>}
                  <p className="text-xs font-bold text-gray-800">{s.title}</p>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 mt-2">費用: {modelCourse.totalCost}</p>
        </div>

        <div className="space-y-3">
          {quickSightseeing.map((spot) => (
            <Accordion
              key={spot.id}
              id={`sight-${spot.id}`}
              title={spot.name}
              subtitle={spot.distance}
              icon="📍"
              badge={spot.fee === '無料' ? '無料' : spot.fee.split('（')[0]}
              forceOpen={forceOpenIds.has(`sight-${spot.id}`)}
            >
              <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">所要時間</p>
                  <p className="text-[10px] font-bold">{spot.time}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">営業</p>
                  <p className="text-[10px] font-bold">{spot.hours}</p>
                </div>
              </div>
              <p className="text-xs text-gray-700">{spot.desc}</p>
              {spot.tips && (
                <p className="text-[10px] text-ocean-700 mt-1 bg-ocean-50 rounded-lg p-2">
                  <span className="font-bold">Tips:</span> {spot.tips}
                </p>
              )}
            </Accordion>
          ))}
        </div>
      </div>

      {/* ===== FOOD ===== */}
      <div id="food" ref={(el) => (sectionRefs.current.food = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">食事</h2>

        {/* Signature dishes */}
        <Accordion
          id="food-signature"
          title="ジャカルタ名物料理ガイド"
          subtitle="7品"
          icon="🍛"
          defaultOpen
          forceOpen={forceOpenIds.has('food-signature')}
        >
          <div className="space-y-1.5 mt-1">
            {signatureDishes.map((d) => (
              <div key={d.name} className="bg-sand-50 rounded-lg p-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold">{d.name}</span>
                  <span className="text-sunset-600 font-bold text-[10px]">{d.price}</span>
                </div>
                <span className="text-[10px] text-gray-600">{d.desc}</span>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Restaurant list */}
        <div className="space-y-3 mt-3">
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
                  <p className="text-[10px] text-gray-500">場所</p>
                  <p className="text-[10px] font-bold">{r.distance}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5">
                  <p className="text-[10px] text-gray-500">営業</p>
                  <p className="text-[10px] font-bold">{r.hours}</p>
                </div>
              </div>
              <p className="text-xs text-gray-700">{r.desc}</p>
              <div className="mt-2">
                <p className="text-[10px] font-bold text-gray-600 mb-1">おすすめ</p>
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

      {/* ===== SAFETY ===== */}
      <div id="safety" ref={(el) => (sectionRefs.current.safety = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">安全情報</h2>
        <SafetyAlerts alerts={safetyAlerts} />

        {/* Weather info */}
        <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-200">
          <p className="text-xs font-bold text-blue-800 mb-2">天候・気候（2〜3月）</p>
          <p className="text-xs text-gray-700 mb-2">{weatherInfo.climate}</p>
          <div className="grid grid-cols-3 gap-1 mb-2">
            <div className="bg-white rounded-lg p-1.5 text-center">
              <p className="text-[10px] text-gray-500">最高</p>
              <p className="text-[10px] font-bold">{weatherInfo.february.highTemp}</p>
            </div>
            <div className="bg-white rounded-lg p-1.5 text-center">
              <p className="text-[10px] text-gray-500">最低</p>
              <p className="text-[10px] font-bold">{weatherInfo.february.lowTemp}</p>
            </div>
            <div className="bg-white rounded-lg p-1.5 text-center">
              <p className="text-[10px] text-gray-500">降水量</p>
              <p className="text-[10px] font-bold">{weatherInfo.february.rainfall}</p>
            </div>
          </div>
          <p className="text-[10px] text-gray-600">{weatherInfo.rainPattern}</p>
          <p className="text-[10px] text-red-600 mt-1">{weatherInfo.floodRisk}</p>
        </div>

        {/* Clothing */}
        <Accordion
          id="safety-clothing"
          title="推奨服装・持ち物"
          subtitle="雨季対策が重要"
          icon="👕"
          forceOpen={forceOpenIds.has('safety-clothing')}
        >
          <div className="space-y-1 mt-1">
            {weatherInfo.clothing.map((item, i) => (
              <p key={i} className="text-xs text-gray-700">
                <span className="text-ocean-600 mr-1">&#9679;</span>{item}
              </p>
            ))}
          </div>
        </Accordion>

        {/* Indonesian phrases */}
        <Accordion
          id="safety-phrases"
          title="インドネシア語サバイバルフレーズ"
          subtitle="10フレーズ"
          icon="🗣️"
          forceOpen={forceOpenIds.has('safety-phrases')}
        >
          <table className="w-full text-[10px] border-collapse mt-1">
            <thead>
              <tr className="bg-sand-100">
                <th className="text-left p-1.5 font-bold">日本語</th>
                <th className="text-left p-1.5 font-bold">インドネシア語</th>
                <th className="text-left p-1.5 font-bold">読み方</th>
              </tr>
            </thead>
            <tbody>
              {survivalPhrases.map((p) => (
                <tr key={p.ja} className="border-t border-sand-200">
                  <td className="p-1.5">{p.ja}</td>
                  <td className="p-1.5 font-bold">{p.id}</td>
                  <td className="p-1.5 text-gray-500">{p.reading}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Accordion>

        {/* Emergency contacts */}
        <div className="mt-4 bg-red-50 rounded-xl p-4 border border-red-200">
          <p className="text-xs font-bold text-red-800 mb-2">緊急連絡先</p>
          <div className="space-y-1 text-xs text-gray-700">
            {emergencyContacts.map((c) => (
              <p key={c.name}><span className="font-bold">{c.name}:</span> {c.number}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <div className="px-4 pb-8">
        <div className="flex flex-col gap-2">
          <Link
            to="/day/1"
            className="block w-full py-3 bg-sunset-600 text-white text-center text-sm font-bold rounded-xl"
          >
            Day 1の詳細 →
          </Link>
          <Link
            to="/bandung"
            className="block w-full py-3 bg-ocean-600 text-white text-center text-sm font-bold rounded-xl"
          >
            バンドン完全ガイド →
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
