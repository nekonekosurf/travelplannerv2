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
  borobudurInfo,
  borobudurLayers,
  borobudurNumbers,
  borobudurTickets,
  borobudurTimeSlots,
  borobudurSunrise,
  punthukSetumbu,
  borobudurPhotoRules,
  borobudurScams,
  borobudurDress,
  borobudurAccess,
  prambananInfo,
  prambananMainTemples,
  prambananVahanas,
  ramayanaBallet,
  nearbyTemples,
  kratonInfo,
  tamanSari,
  malioboroStreet,
  prawirotaman,
  kotagede,
  fortVredeburg,
  jomblangCave,
  gudegShops,
  sateKlathak,
  kopiJoss,
  otherFoods,
  bakpiaComparison,
  angkringanInfo,
  batikTypes,
  batikAuthenticity,
  batikSpots,
  accommodations,
  pangandaranToYogya,
  yogyaToMalang,
  cityTransport,
  safetyAlerts,
  modelItineraries,
  practicalInfo,
} from '../data/yogyakarta-data'

export default function YogyakartaGuide() {
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
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Borobudur-Nothwest-view.jpg/1024px-Borobudur-Nothwest-view.jpg"
        alt="ボロブドゥール寺院の日の出"
        overlay
      >
        <span className="text-xs font-bold bg-ocean-600 px-3 py-1 rounded-full inline-block mb-2">
          Day 5-6
        </span>
        <h1 className="text-2xl font-black">ジョグジャカルタ</h1>
        <p className="text-sm opacity-90 mt-1">2つのUNESCO世界遺産と古都文化の旅</p>
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
          ジョグジャカルタ（通称「ジョグジャ」）は、インドネシアで唯一の<strong>現役の王制特別州</strong>。
          スルタン・ハメンクブウォノ10世が州知事と王を兼任し、王宮（クラトン）は今も機能する政治・文化の中心だ。
          ジャワ島の「文化の首都」として知られ、2つのUNESCO世界遺産（ボロブドゥールとプランバナン）への玄関口であり、
          古典ジャワ文化（バティック、ガムラン、ワヤン、舞踊）が日常に根付く学生の街でもある。
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

        {/* Budget total */}
        <div className="mt-3 bg-ocean-50 rounded-xl p-3 border border-ocean-200">
          <p className="text-xs font-bold text-ocean-800 mb-1">2日間の予算目安</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-[10px] text-gray-500">節約プラン</p>
              <p className="text-xs font-bold">約IDR 1,500,000〜（約$93）</p>
              <p className="text-[10px] text-gray-500">ストゥンブの丘、コンビチケット使用</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500">充実プラン</p>
              <p className="text-xs font-bold">約IDR 3,500,000〜（約$218）</p>
              <p className="text-[10px] text-gray-500">マノハラサンライズ、バレエVIP</p>
            </div>
          </div>
        </div>

        {/* Practical info */}
        <div className="mt-4 bg-sand-50 rounded-xl p-3 border border-sand-200">
          <p className="text-xs font-bold text-gray-800 mb-1">実用情報</p>
          <ul className="space-y-1">
            {practicalInfo.map((info) => (
              <li key={info.label} className="text-xs text-gray-700">
                <span className="font-bold text-ocean-700">{info.label}:</span> {info.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">ジョグジャカルタ エリアマップ</h3>
          <RouteMap spots={mapSpots} pois={mapPois} height="350px" />
        </div>
      </div>

      {/* ===== BOROBUDUR ===== */}
      <div id="borobudur" ref={(el) => (sectionRefs.current.borobudur = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">ボロブドゥール寺院</h2>
        <p className="text-xs text-gray-500 mb-4">世界最大の仏教寺院 / UNESCO世界遺産</p>

        {/* Borobudur highlight card */}
        <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-4 mb-4">
          <p className="text-sm font-black text-gray-800 mb-2">世界三大仏教遺跡の一つ</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            {borobudurInfo.description}
            {borobudurInfo.significance}
            <br />
            <span className="text-[10px] text-gray-500 mt-1 block">
              {borobudurInfo.built} / {borobudurInfo.unesco}
            </span>
            <span className="text-[10px] text-gray-500 block">
              営業: {borobudurInfo.hours}
            </span>
          </p>

          {/* 3 layers */}
          <div className="mt-3 space-y-2">
            <p className="text-xs font-bold text-ocean-800">仏教の3層の世界観</p>
            {borobudurLayers.map((l) => (
              <div key={l.layer} className="bg-white rounded-lg p-2">
                <p className="text-xs font-bold text-gray-800">{l.layer}: {l.name}</p>
                <p className="text-[10px] text-gray-600">{l.structure}</p>
                <p className="text-[10px] text-ocean-600">{l.meaning}</p>
              </div>
            ))}
          </div>

          {/* Numbers */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            {borobudurNumbers.map((n) => (
              <div key={n.item} className="bg-white rounded-lg p-2 text-center">
                <p className="text-[10px] text-gray-500">{n.item}</p>
                <p className="text-[10px] font-bold">{n.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket table */}
        <div className="bg-white border border-sand-200 rounded-2xl p-3 mb-4">
          <p className="text-xs font-bold text-gray-800 mb-2">チケット料金（外国人向け・2025-2026年）</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[10px] border-collapse">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">種別</th>
                  <th className="text-left p-1.5 font-bold">大人</th>
                  <th className="text-left p-1.5 font-bold">子供</th>
                </tr>
              </thead>
              <tbody>
                {borobudurTickets.map((t) => (
                  <tr key={t.type} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{t.type}</td>
                    <td className="p-1.5">{t.adult}</td>
                    <td className="p-1.5">{t.child}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">
            インドネシア国民はIDR 50,000程度。外国人料金は約8-10倍。
          </p>
        </div>

        <div className="space-y-3">
          {/* Sunrise options */}
          <Accordion
            id="borobudur-sunrise"
            title="サンライズ体験ガイド"
            subtitle="マノハラホテル経由 IDR 1,000,000 / ストゥンブの丘 IDR 50,000"
            icon="🌅"
            forceOpen={forceOpenIds.has('borobudur-sunrise')}
          >
            <div className="mt-1">
              <p className="text-xs font-bold text-ocean-800 mb-2">マノハラホテル経由（寺院内サンライズ）</p>
              <div className="bg-sand-50 rounded-lg p-2 mb-2">
                <div className="grid grid-cols-2 gap-1 text-[10px]">
                  <p><span className="font-bold">集合:</span> {borobudurSunrise.meeting}</p>
                  <p><span className="font-bold">入場:</span> {borobudurSunrise.entry}</p>
                  <p><span className="font-bold">時間:</span> {borobudurSunrise.duration}</p>
                  <p><span className="font-bold">料金:</span> {borobudurSunrise.price}</p>
                  <p><span className="font-bold">定員:</span> {borobudurSunrise.capacity}</p>
                  <p><span className="font-bold">含む:</span> {borobudurSunrise.includes}</p>
                </div>
                <p className="text-[10px] text-red-600 mt-1 font-bold">{borobudurSunrise.booking}</p>
              </div>

              <p className="text-[10px] font-bold text-gray-600 mb-1">ツアー料金目安（送迎込み）</p>
              <div className="grid grid-cols-4 gap-1 mb-3">
                {borobudurSunrise.tourPrices.map((tp) => (
                  <div key={tp.people} className="bg-sand-50 rounded-lg p-1.5 text-center">
                    <p className="text-[10px] text-gray-500">{tp.people}</p>
                    <p className="text-[10px] font-bold">{tp.price}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs font-bold text-ocean-800 mb-2">ストゥンブの丘（代替サンライズスポット）</p>
              <div className="bg-sand-50 rounded-lg p-2">
                <p className="text-xs font-bold">{punthukSetumbu.name}</p>
                <p className="text-[10px] text-gray-600">{punthukSetumbu.location}</p>
                <p className="text-[10px] text-gray-600">入場料: {punthukSetumbu.fee}</p>
                <p className="text-[10px] text-gray-700 mt-1">{punthukSetumbu.experience}</p>
                <p className="text-[10px] text-green-700 mt-1">メリット: {punthukSetumbu.merits}</p>
                <p className="text-[10px] text-red-600 mt-0.5">デメリット: {punthukSetumbu.demerits}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{punthukSetumbu.extra}</p>
              </div>

              <div className="mt-2 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-2">
                <p className="text-[10px] text-amber-800">
                  <span className="font-bold">サンライズのコツ:</span> 乾季（5-10月）がベスト。
                  雨季（11-4月）は曇り率が高いがドラマチックな霧の景色も。日の出は約05:30-06:00。
                  防寒着・懐中電灯・虫除け持参。前日ボロブドゥール村に宿泊すると楽。
                </p>
              </div>
            </div>
          </Accordion>

          {/* Time slots */}
          <Accordion
            id="borobudur-timeslots"
            title="登頂の時間枠制（2025年〜）"
            subtitle={`1時間ごとの交代制・1日${borobudurTimeSlots.maxPerDay}名限定`}
            icon="🕐"
            forceOpen={forceOpenIds.has('borobudur-timeslots')}
          >
            <div className="mt-1">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="bg-sand-50 rounded-lg p-2 text-center">
                  <p className="text-[10px] text-gray-500">セッション</p>
                  <p className="text-xs font-bold">{borobudurTimeSlots.sessionsPerDay}回/日</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-2 text-center">
                  <p className="text-[10px] text-gray-500">1回の定員</p>
                  <p className="text-xs font-bold">{borobudurTimeSlots.maxPerSession}名</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-2 text-center">
                  <p className="text-[10px] text-gray-500">時間帯</p>
                  <p className="text-xs font-bold">{borobudurTimeSlots.start}〜{borobudurTimeSlots.end}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-2 text-center">
                  <p className="text-[10px] text-gray-500">1日上限</p>
                  <p className="text-xs font-bold">{borobudurTimeSlots.maxPerDay}名</p>
                </div>
              </div>
              <p className="text-xs text-green-700">おすすめ: {borobudurTimeSlots.bestSession}</p>
              <p className="text-xs text-gray-600 mt-1">{borobudurTimeSlots.sandals}</p>
            </div>
          </Accordion>

          {/* Photo rules */}
          <Accordion
            id="borobudur-photo"
            title="写真撮影ルール（2025年〜重要変更）"
            subtitle="寺院内での個人撮影が全面禁止！"
            icon="📸"
            badge="重要"
            variant="warning"
            forceOpen={forceOpenIds.has('borobudur-photo')}
          >
            <div className="mt-1 space-y-1">
              {borobudurPhotoRules.map((rule, i) => (
                <p key={i} className="text-xs text-gray-700">
                  <span className="text-red-600 mr-1 font-bold">!</span>{rule}
                </p>
              ))}
            </div>
          </Accordion>

          {/* Dress code */}
          <Accordion
            id="borobudur-dress"
            title="服装規定"
            subtitle="肩と膝を覆う・ウパナットサンダル"
            icon="👔"
            forceOpen={forceOpenIds.has('borobudur-dress')}
          >
            <ul className="mt-1 space-y-1">
              {borobudurDress.map((item, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{item}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Scams */}
          <Accordion
            id="borobudur-scams"
            title="詐欺・注意事項"
            subtitle="通貨すり替え・バティック店・偽ガイド"
            icon="⚠️"
            variant="warning"
            forceOpen={forceOpenIds.has('borobudur-scams')}
          >
            <div className="mt-1 space-y-2">
              {borobudurScams.map((scam, i) => (
                <div key={i} className="bg-white rounded-lg p-2">
                  <p className="text-xs font-bold text-red-700">{scam.type}</p>
                  <p className="text-[10px] text-gray-700">{scam.detail}</p>
                  <p className="text-[10px] text-green-700 mt-0.5">対策: {scam.counter}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Access to Borobudur */}
          <Accordion
            id="borobudur-access"
            title="ボロブドゥールへの行き方"
            subtitle="DAMRI IDR 35,000 / Grab IDR 150,000〜"
            icon="🚌"
            forceOpen={forceOpenIds.has('borobudur-access')}
          >
            <div className="overflow-x-auto mt-1">
              <table className="w-full text-[10px] border-collapse">
                <thead>
                  <tr className="bg-sand-100">
                    <th className="text-left p-1.5 font-bold">手段</th>
                    <th className="text-left p-1.5 font-bold">料金</th>
                    <th className="text-left p-1.5 font-bold">所要</th>
                    <th className="text-left p-1.5 font-bold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {borobudurAccess.map((a) => (
                    <tr key={a.method} className="border-t border-sand-200">
                      <td className="p-1.5 font-bold">{a.method}</td>
                      <td className="p-1.5">{a.price}</td>
                      <td className="p-1.5">{a.duration}</td>
                      <td className="p-1.5 text-gray-500">{a.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== PRAMBANAN ===== */}
      <div id="prambanan" ref={(el) => (sectionRefs.current.prambanan = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">プランバナン寺院群</h2>
        <p className="text-xs text-gray-500 mb-4">ボロブドゥールと対をなすヒンドゥー教の世界遺産</p>

        {/* Prambanan highlight card */}
        <div className="bg-sunset-50 border border-sunset-200 rounded-2xl p-4 mb-4">
          <p className="text-sm font-black text-gray-800 mb-2">ヒンドゥー教の至宝 — 240以上の寺院群</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            {prambananInfo.templeCount}。{prambananInfo.built}。
            ボロブドゥールの仏教と対をなすヒンドゥー教の遺跡。
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center">
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">大人</p>
              <p className="text-[10px] font-bold">{prambananInfo.adultFee}</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">子供</p>
              <p className="text-[10px] font-bold">{prambananInfo.childFee}</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">営業</p>
              <p className="text-[10px] font-bold">07:00-17:00</p>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">
            {prambananInfo.unesco} / コンビチケット（+ボロブドゥール）IDR 675,000
          </p>
        </div>

        <div className="space-y-3">
          {/* Main temples */}
          <Accordion
            id="prambanan-main"
            title="主要寺院（3大寺院）"
            subtitle="シヴァ47m・ブラフマー33m・ヴィシュヌ33m"
            icon="🛕"
            defaultOpen
            forceOpen={forceOpenIds.has('prambanan-main')}
          >
            <div className="mt-1 space-y-2">
              {prambananMainTemples.map((t) => (
                <div key={t.name} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{t.name}</p>
                  <div className="flex gap-3 mt-0.5">
                    <span className="text-[10px] text-sunset-600 font-bold">高さ {t.height}</span>
                    <span className="text-[10px] text-gray-500">主神: {t.deity}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-0.5">{t.features}</p>
                </div>
              ))}

              <p className="text-[10px] font-bold text-gray-600 mt-2">乗り物（ヴァーハナ）寺院</p>
              <div className="grid grid-cols-3 gap-1">
                {prambananVahanas.map((v) => (
                  <div key={v.name} className="bg-sand-50 rounded-lg p-1.5 text-center">
                    <p className="text-[10px] font-bold">{v.name}</p>
                    <p className="text-[10px] text-gray-500">{v.vehicle}</p>
                  </div>
                ))}
              </div>
            </div>
          </Accordion>

          {/* Ramayana Ballet */}
          <Accordion
            id="prambanan-ballet"
            title="ラーマーヤナ・バレエ（必見！）"
            subtitle={`${ramayanaBallet.days} / ${ramayanaBallet.priceRange}`}
            icon="💃"
            badge="おすすめ"
            variant="highlight"
            forceOpen={forceOpenIds.has('prambanan-ballet')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 leading-relaxed">
                プランバナン寺院をバックに上演される壮大な屋外舞踊劇。200名以上の舞踊家とガムラン奏者による圧巻のパフォーマンス。
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2 mb-2">
                <div className="bg-sand-50 rounded-lg p-2">
                  <p className="text-[10px] text-gray-500">開催日</p>
                  <p className="text-[10px] font-bold">{ramayanaBallet.days}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-2">
                  <p className="text-[10px] text-gray-500">時間</p>
                  <p className="text-[10px] font-bold">{ramayanaBallet.time}</p>
                </div>
              </div>

              <p className="text-[10px] font-bold text-gray-600 mb-1">座席クラス</p>
              {ramayanaBallet.seats.map((s) => (
                <div key={s.class} className="flex justify-between items-center bg-sand-50 rounded-lg p-1.5 mb-1">
                  <span className="text-[10px] font-bold">{s.class}</span>
                  <span className="text-[10px] text-sunset-600 font-bold">{s.price}</span>
                  <span className="text-[10px] text-gray-500">{s.features}</span>
                </div>
              ))}

              <div className="mt-2 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-2">
                <p className="text-[10px] text-amber-800">
                  <span className="font-bold">注意:</span> {ramayanaBallet.note}
                </p>
              </div>

              <p className="text-[10px] text-gray-500 mt-1">
                乾季（5-10月）: {ramayanaBallet.venueDry}<br />
                雨季（11-4月）: {ramayanaBallet.venueWet}
              </p>
            </div>
          </Accordion>

          {/* Nearby temples */}
          <Accordion
            id="prambanan-nearby"
            title="スウ寺院 & プラオサン寺院"
            subtitle="プランバナン周辺の追加寺院"
            icon="🏛️"
            forceOpen={forceOpenIds.has('prambanan-nearby')}
          >
            <div className="mt-1 space-y-2">
              {nearbyTemples.map((t) => (
                <div key={t.id} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{t.name}</p>
                  <div className="grid grid-cols-2 gap-1 mt-1 text-[10px]">
                    <p><span className="font-bold">距離:</span> {t.distance}</p>
                    <p><span className="font-bold">料金:</span> {t.fee}</p>
                    <p><span className="font-bold">宗教:</span> {t.religion}</p>
                    {t.hours && <p><span className="font-bold">営業:</span> {t.hours}</p>}
                  </div>
                  <p className="text-[10px] text-gray-600 mt-1">{t.highlight}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== CITY ATTRACTIONS ===== */}
      <div id="city" ref={(el) => (sectionRefs.current.city = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">市内観光</h2>
        <p className="text-xs text-gray-500 mb-4">王宮・水の城・マリオボロ・洞窟探検</p>

        <div className="space-y-3">
          {/* Kraton */}
          <Accordion
            id="city-kraton"
            title="クラトン（王宮）"
            subtitle={`外国人 ${kratonInfo.fee} / 日替わりパフォーマンス`}
            icon="👑"
            forceOpen={forceOpenIds.has('city-kraton')}
          >
            <div className="mt-1">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="bg-sand-50 rounded-lg p-1.5 text-center">
                  <p className="text-[10px] text-gray-500">営業</p>
                  <p className="text-[10px] font-bold">{kratonInfo.hours}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5 text-center">
                  <p className="text-[10px] text-gray-500">休み</p>
                  <p className="text-[10px] font-bold">{kratonInfo.closed}</p>
                </div>
              </div>

              <p className="text-[10px] font-bold text-gray-600 mb-1">見どころ</p>
              <ul className="space-y-1 mb-2">
                {kratonInfo.highlights.map((h, i) => (
                  <li key={i} className="text-[10px] text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>

              <p className="text-[10px] font-bold text-gray-600 mb-1">無料パフォーマンス（入場料に含む）</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] border-collapse">
                  <thead>
                    <tr className="bg-sand-100">
                      <th className="text-left p-1 font-bold">曜日</th>
                      <th className="text-left p-1 font-bold">内容</th>
                      <th className="text-left p-1 font-bold">時間</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kratonInfo.performances.map((p) => (
                      <tr key={p.day} className="border-t border-sand-200">
                        <td className="p-1 font-bold">{p.day}</td>
                        <td className="p-1">{p.content}</td>
                        <td className="p-1">{p.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-green-700 mt-1">おすすめ: 火曜のガムランか日曜の舞踊が最も見ごたえあり</p>
            </div>
          </Accordion>

          {/* Taman Sari */}
          <Accordion
            id="city-tamansari"
            title="タマンサリ（水の城）"
            subtitle={`${tamanSari.fee} / クラトンから${tamanSari.distanceFromKraton}`}
            icon="🏰"
            forceOpen={forceOpenIds.has('city-tamansari')}
          >
            <div className="mt-1">
              <div className="bg-sand-50 rounded-lg p-1.5 text-center mb-2">
                <p className="text-[10px] text-gray-500">営業</p>
                <p className="text-[10px] font-bold">{tamanSari.hours}</p>
              </div>
              <ul className="space-y-1">
                {tamanSari.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>

          {/* Malioboro */}
          <Accordion
            id="city-malioboro"
            title="マリオボロ通り"
            subtitle="ジョグジャの目抜き通り。ショッピング・屋台・馬車"
            icon="🛍️"
            forceOpen={forceOpenIds.has('city-malioboro')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 mb-2">{malioboroStreet.description}</p>
              <ul className="space-y-1">
                {malioboroStreet.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>

          {/* Prawirotaman */}
          <Accordion
            id="city-prawirotaman"
            title="プラウィロタマン地区"
            subtitle={prawirotaman.description}
            icon="🎨"
            forceOpen={forceOpenIds.has('city-prawirotaman')}
          >
            <ul className="mt-1 space-y-1">
              {prawirotaman.features.map((f, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{f}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Kotagede */}
          <Accordion
            id="city-kotagede"
            title="コタグデ（銀の里）"
            subtitle={`${kotagede.distance} / ${kotagede.prices}`}
            icon="💍"
            forceOpen={forceOpenIds.has('city-kotagede')}
          >
            <ul className="mt-1 space-y-1">
              {kotagede.highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-gray-500 mt-1">入場: {kotagede.fee}</p>
          </Accordion>

          {/* Jomblang Cave */}
          <Accordion
            id="city-jomblang"
            title="ジョンブラン洞窟（オプション）"
            subtitle={`${jomblangCave.fee} / 60mの垂直降下・天国の光`}
            icon="🕳️"
            forceOpen={forceOpenIds.has('city-jomblang')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                {jomblangCave.highlight}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="bg-sand-50 rounded-lg p-1.5 text-center">
                  <p className="text-[10px] text-gray-500">営業</p>
                  <p className="text-[10px] font-bold">{jomblangCave.hours}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-1.5 text-center">
                  <p className="text-[10px] text-gray-500">料金</p>
                  <p className="text-[10px] font-bold">{jomblangCave.fee}</p>
                </div>
              </div>

              <p className="text-[10px] font-bold text-gray-600 mb-1">ツアーの流れ</p>
              <div className="space-y-1 mb-2">
                {jomblangCave.process.map((step, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-ocean-600 text-white flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-[10px] text-gray-700">{step}</p>
                  </div>
                ))}
              </div>

              <p className="text-[10px] font-bold text-gray-600 mb-1">注意事項</p>
              <ul className="space-y-0.5">
                {jomblangCave.tips.map((tip, i) => (
                  <li key={i} className="text-[10px] text-gray-700">
                    <span className="text-ocean-600 mr-1">&#9679;</span>{tip}
                  </li>
                ))}
              </ul>

              <p className="text-[10px] font-bold text-gray-600 mt-2 mb-1">ツアー料金目安（送迎込み）</p>
              <div className="grid grid-cols-4 gap-1">
                {jomblangCave.tourPrices.map((tp) => (
                  <div key={tp.people} className="bg-sand-50 rounded-lg p-1.5 text-center">
                    <p className="text-[10px] text-gray-500">{tp.people}</p>
                    <p className="text-[10px] font-bold">{tp.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== FOOD ===== */}
      <div id="food" ref={(el) => (sectionRefs.current.food = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">食事</h2>
        <p className="text-xs text-gray-500 mb-4">ジャワ島随一のB級グルメ天国。味の特徴は「甘い（マニス）」</p>

        {/* Gudeg highlight card */}
        <div className="bg-sunset-50 border border-sunset-200 rounded-2xl p-4 mb-4">
          <p className="text-sm font-black text-gray-800 mb-1">グデグ（Gudeg）— ジョグジャの魂</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            若いジャックフルーツをココナッツミルク・ヤシ砂糖・ガランガル・レモングラス・月桂樹の葉で
            何時間も煮込んだ料理。甘く濃厚な味わいが特徴。ご飯・鶏肉・ゆで卵・クレチェック（牛皮のスパイス煮）と共に提供される。
          </p>
          <p className="text-[10px] text-gray-500 mt-1">
            ウィジラン通り（Jl. Wijilan）: 王宮北広場からすぐ東に伸びる「グデグ通り」。10軒以上のグデグ店が並ぶ。食べ比べに最適。
          </p>
          <button
            onClick={() => scrollToId('food-gudeg')}
            className="mt-2 text-xs text-ocean-600 underline"
          >
            5店の比較を見る
          </button>
        </div>

        <div className="space-y-3">
          {/* Gudeg shops compared */}
          <Accordion
            id="food-gudeg"
            title="グデグ名店5店 比較"
            subtitle="Bu Tjitro 1925 / Yu Djum / Sagan / Pawon / Bu Djuminten"
            icon="🍛"
            forceOpen={forceOpenIds.has('food-gudeg')}
          >
            <div className="mt-1 space-y-2">
              {gudegShops.map((shop) => (
                <div key={shop.name} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{shop.name}</p>
                  <p className="text-[10px] text-gray-500">{shop.address}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{shop.features}</p>
                  <div className="flex gap-3 mt-1">
                    <span className="text-[10px] text-sunset-600 font-bold">{shop.price}</span>
                    <span className="text-[10px] text-gray-500">{shop.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Sate Klathak */}
          <Accordion
            id="food-sate"
            title="サテ・クラタック"
            subtitle="鉄串で焼く羊肉。塩のみの味付け"
            icon="🥩"
            forceOpen={forceOpenIds.has('food-sate')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                {sateKlathak.description}
              </p>
              {sateKlathak.shops.map((shop) => (
                <div key={shop.name} className="bg-sand-50 rounded-lg p-2 mb-1">
                  <p className="text-xs font-bold text-gray-800">{shop.name}</p>
                  <p className="text-[10px] text-gray-500">{shop.address}</p>
                  <p className="text-[10px] text-gray-600">{shop.note} / {shop.hours}</p>
                </div>
              ))}
              <p className="text-[10px] text-amber-700 mt-1">{sateKlathak.warning}</p>
            </div>
          </Accordion>

          {/* Kopi Joss & Angkringan */}
          <Accordion
            id="food-kopijoss"
            title="コピ・ジョス & アンクリンガン"
            subtitle="炭コーヒー IDR 5,000〜 / 屋台文化"
            icon="☕"
            forceOpen={forceOpenIds.has('food-kopijoss')}
          >
            <div className="mt-1">
              <p className="text-xs font-bold text-gray-800 mb-1">コピ・ジョス（炭コーヒー）</p>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                {kopiJoss.description}
              </p>
              <div className="bg-sand-50 rounded-lg p-2 mb-3">
                <p className="text-[10px] font-bold">{kopiJoss.shop}</p>
                <p className="text-[10px] text-gray-500">{kopiJoss.location}</p>
                <p className="text-[10px] text-gray-600">{kopiJoss.hours} / {kopiJoss.price}</p>
              </div>

              <p className="text-xs font-bold text-gray-800 mb-1">アンクリンガン（屋台文化）</p>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                {angkringanInfo.description}
              </p>
              {angkringanInfo.shops.map((shop) => (
                <div key={shop.name} className="bg-sand-50 rounded-lg p-2 mb-1">
                  <p className="text-[10px] font-bold">{shop.name}</p>
                  <p className="text-[10px] text-gray-500">{shop.location} — {shop.note}</p>
                </div>
              ))}
              <p className="text-[10px] text-green-700 mt-1">予算目安: {angkringanInfo.budget}</p>
            </div>
          </Accordion>

          {/* Other local food */}
          <Accordion
            id="food-other"
            title="その他のローカルフード"
            subtitle="ナシクチン・オセンメルコン・ウェダンロンデ・アヤムゴレン"
            icon="🍽️"
            forceOpen={forceOpenIds.has('food-other')}
          >
            <div className="mt-1 space-y-2">
              {otherFoods.map((food) => (
                <div key={food.name} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{food.name}</p>
                  <p className="text-[10px] text-gray-600">{food.description}</p>
                  {food.shop && <p className="text-[10px] text-gray-500">おすすめ: {food.shop}</p>}
                  {food.price && <p className="text-[10px] text-sunset-600 font-bold">{food.price}</p>}
                </div>
              ))}
            </div>
          </Accordion>

          {/* Bakpia comparison */}
          <Accordion
            id="food-bakpia"
            title="バクピア・パトック（ジョグジャ定番土産）"
            subtitle="25 vs 75 — 2大ブランド比較"
            icon="🥮"
            forceOpen={forceOpenIds.has('food-bakpia')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                中華系移民から伝わった薄皮饅頭。緑豆餡が最も伝統的。番号は元々の家番号で、25番地と75番地の家がそれぞれブランド化した。
              </p>
              {bakpiaComparison.map((b) => (
                <div key={b.brand} className="bg-sand-50 rounded-lg p-2 mb-1">
                  <p className="text-xs font-bold text-gray-800">{b.brand}</p>
                  <p className="text-[10px] text-gray-500">{b.location}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{b.features}</p>
                  <p className="text-[10px] text-sunset-600 font-bold mt-0.5">{b.price}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== BATIK ===== */}
      <div id="batik" ref={(el) => (sectionRefs.current.batik = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">バティック & 工芸品</h2>
        <p className="text-xs text-gray-500 mb-4">2009年ユネスコ世界無形文化遺産</p>

        <div className="space-y-3">
          {/* Types & prices */}
          <Accordion
            id="batik-types"
            title="バティックの種類と価格帯"
            subtitle="手描き IDR 200,000〜 / スタンプ / プリント"
            icon="🎨"
            defaultOpen
            forceOpen={forceOpenIds.has('batik-types')}
          >
            <div className="mt-1 space-y-2">
              {batikTypes.map((b) => (
                <div key={b.type} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{b.type}</p>
                  <p className="text-[10px] text-gray-600">{b.method}</p>
                  <p className="text-[10px] text-sunset-600 font-bold mt-0.5">{b.price}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* How to identify */}
          <Accordion
            id="batik-identify"
            title="本物の見分け方"
            subtitle="裏表・触感・パターン"
            icon="🔍"
            forceOpen={forceOpenIds.has('batik-identify')}
          >
            <ul className="mt-1 space-y-1">
              {batikAuthenticity.map((item, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{item}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Beringharjo & shops */}
          <Accordion
            id="batik-shops"
            title="ブリンハルジョ市場 & おすすめスポット"
            subtitle="1758年創業。値切りは最初の50-60%を目指す"
            icon="🏪"
            forceOpen={forceOpenIds.has('batik-shops')}
          >
            <div className="mt-1 space-y-2">
              {batikSpots.map((spot) => (
                <div key={spot.name} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{spot.name}</p>
                  <p className="text-[10px] text-gray-500">{spot.location}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{spot.features}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== ACCOMMODATION ===== */}
      <div id="stay" ref={(el) => (sectionRefs.current.stay = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">宿泊</h2>
        <p className="text-xs text-gray-500 mb-4">3エリア: マリオボロ（駅近） / プラウィロタマン（カフェ街） / ボロブドゥール近郊</p>

        <div className="space-y-3">
          {/* Malioboro area */}
          <Accordion
            id="stay-malioboro"
            title="マリオボロ地区（駅近・便利）"
            subtitle="IDR 100,000〜800,000"
            icon="🏨"
            forceOpen={forceOpenIds.has('stay-malioboro')}
          >
            <div className="mt-1 space-y-2">
              {accommodations.malioboro.hotels.map((h) => (
                <div key={h.name} className="bg-sand-50 rounded-lg p-2">
                  <div className="flex justify-between items-start">
                    <p className="text-xs font-bold text-gray-800">{h.name}</p>
                    <span className="text-[10px] text-sunset-600 font-bold flex-shrink-0">{h.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{h.type}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{h.features}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Prawirotaman area */}
          <Accordion
            id="stay-prawirotaman"
            title="プラウィロタマン地区（バックパッカー・カフェ街）"
            subtitle="IDR 78,000〜700,000"
            icon="🎒"
            forceOpen={forceOpenIds.has('stay-prawirotaman')}
          >
            <div className="mt-1 space-y-2">
              {accommodations.prawirotaman.hotels.map((h) => (
                <div key={h.name} className="bg-sand-50 rounded-lg p-2">
                  <div className="flex justify-between items-start">
                    <p className="text-xs font-bold text-gray-800">{h.name}</p>
                    <span className="text-[10px] text-sunset-600 font-bold flex-shrink-0">{h.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{h.type}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{h.features}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Borobudur area */}
          <Accordion
            id="stay-borobudur"
            title="ボロブドゥール近郊（サンライズ狙い）"
            subtitle="IDR 100,000〜1,500,000"
            icon="🌅"
            badge="サンライズ"
            forceOpen={forceOpenIds.has('stay-borobudur')}
          >
            <div className="mt-1 space-y-2">
              {accommodations.borobudur.hotels.map((h) => (
                <div key={h.name} className={`rounded-lg p-2 ${h.recommended ? 'bg-green-50 border border-green-200' : 'bg-sand-50'}`}>
                  <div className="flex justify-between items-start">
                    <p className="text-xs font-bold text-gray-800">{h.name}</p>
                    <span className="text-[10px] text-sunset-600 font-bold flex-shrink-0">{h.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{h.type}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{h.features}</p>
                </div>
              ))}
              <p className="text-[10px] text-green-700">
                サンライズ狙いなら前泊でボロブドゥール村に宿泊し、03:30に出発するのが最も楽。
                ジョグジャ市内からだと02:30起きが必要。
              </p>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== TRANSPORT ===== */}
      <div id="transport" ref={(el) => (sectionRefs.current.transport = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">交通</h2>

        <div className="space-y-3">
          {/* Pangandaran → Yogya */}
          <Accordion
            id="transport-pangandaran"
            title="パンガンダラン → ジョグジャカルタ"
            subtitle="バス+列車 約6.5-7.5時間"
            icon="🚂"
            defaultOpen
            forceOpen={forceOpenIds.has('transport-pangandaran')}
          >
            <div className="mt-1">
              <p className="text-xs text-gray-700 mb-2">{pangandaranToYogya.description}</p>

              <p className="text-[10px] font-bold text-gray-600 mb-1">{pangandaranToYogya.route1.name}</p>
              {pangandaranToYogya.route1.legs.map((leg) => (
                <div key={leg.segment} className="bg-sand-50 rounded-lg p-2 mb-1">
                  <p className="text-[10px] font-bold text-gray-800">{leg.segment}</p>
                  <div className="flex gap-3 mt-0.5">
                    <span className="text-[10px] text-gray-600">{leg.method}</span>
                    <span className="text-[10px] text-sunset-600 font-bold">{leg.price}</span>
                    <span className="text-[10px] text-gray-500">{leg.duration}</span>
                  </div>
                </div>
              ))}

              <p className="text-[10px] font-bold text-gray-600 mt-2 mb-1">{pangandaranToYogya.route2.name}</p>
              {pangandaranToYogya.route2.legs.map((leg) => (
                <div key={leg.segment} className="bg-sand-50 rounded-lg p-2 mb-1">
                  <p className="text-[10px] font-bold text-gray-800">{leg.segment}</p>
                  <div className="flex gap-3 mt-0.5">
                    <span className="text-[10px] text-gray-600">{leg.method}</span>
                    <span className="text-[10px] text-sunset-600 font-bold">{leg.price}</span>
                    <span className="text-[10px] text-gray-500">{leg.duration}</span>
                  </div>
                </div>
              ))}

              <p className="text-[10px] text-ocean-700 mt-1">予約: {pangandaranToYogya.booking}</p>
            </div>
          </Accordion>

          {/* City transport */}
          <Accordion
            id="transport-city"
            title="ジョグジャカルタ市内の交通"
            subtitle="Trans Jogja IDR 3,500 / Grab / ベチャック"
            icon="🚌"
            forceOpen={forceOpenIds.has('transport-city')}
          >
            <div className="mt-1 space-y-1.5">
              {cityTransport.map((t) => (
                <div key={t.type} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{t.type}</span>
                  <span className="text-sunset-600 ml-1">{t.price}</span>
                  <span className="block text-gray-500 text-[10px]">{t.detail}</span>
                </div>
              ))}
            </div>
          </Accordion>

          {/* To Borobudur */}
          <Accordion
            id="transport-borobudur"
            title="ボロブドゥールへの行き方"
            subtitle="DAMRI IDR 35,000 / チャーター車 / ツアー"
            icon="🚐"
            forceOpen={forceOpenIds.has('transport-borobudur')}
          >
            <div className="overflow-x-auto mt-1">
              <table className="w-full text-[10px] border-collapse">
                <thead>
                  <tr className="bg-sand-100">
                    <th className="text-left p-1.5 font-bold">手段</th>
                    <th className="text-left p-1.5 font-bold">料金</th>
                    <th className="text-left p-1.5 font-bold">所要</th>
                    <th className="text-left p-1.5 font-bold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {borobudurAccess.map((a) => (
                    <tr key={a.method} className="border-t border-sand-200">
                      <td className="p-1.5 font-bold">{a.method}</td>
                      <td className="p-1.5">{a.price}</td>
                      <td className="p-1.5">{a.duration}</td>
                      <td className="p-1.5 text-gray-500">{a.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">
              DAMRI帰り便: 08:00, 09:30, 13:30, 15:00発
            </p>
          </Accordion>

          {/* Yogya → Malang */}
          <Accordion
            id="transport-malang"
            title="ジョグジャカルタ → マラン（鉄道）"
            subtitle="Malioboro Express 10:50発 約6時間40分"
            icon="🚂"
            forceOpen={forceOpenIds.has('transport-malang')}
          >
            <div className="mt-1">
              <p className="text-xs text-green-700 mb-2">{yogyaToMalang.recommended}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] border-collapse">
                  <thead>
                    <tr className="bg-sand-100">
                      <th className="text-left p-1.5 font-bold">列車名</th>
                      <th className="text-left p-1.5 font-bold">クラス</th>
                      <th className="text-left p-1.5 font-bold">出発</th>
                      <th className="text-left p-1.5 font-bold">到着</th>
                      <th className="text-left p-1.5 font-bold">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yogyaToMalang.trains.map((t) => (
                      <tr key={t.name} className={`border-t border-sand-200 ${t.name === 'Malioboro Express' ? 'bg-green-50 font-bold' : ''}`}>
                        <td className="p-1.5">{t.name}</td>
                        <td className="p-1.5">{t.class}</td>
                        <td className="p-1.5">{t.departure}</td>
                        <td className="p-1.5">{t.arrival}</td>
                        <td className="p-1.5">{t.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== SAFETY ===== */}
      <div id="safety" ref={(el) => (sectionRefs.current.safety = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">安全情報</h2>

        <SafetyAlerts alerts={safetyAlerts} />

        {/* Model Itineraries */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">モデル日程</h3>

          <div className="space-y-3">
            {/* Plan A */}
            <Accordion
              id="itinerary-a"
              title={modelItineraries.planA.name}
              subtitle={modelItineraries.planA.note}
              icon="📋"
              forceOpen={forceOpenIds.has('itinerary-a')}
            >
              <div className="mt-1 space-y-1.5">
                {modelItineraries.planA.steps.map((step, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-[10px] text-ocean-600 font-bold flex-shrink-0 w-16 mt-0.5">{step.time}</span>
                    <div>
                      <p className="text-[10px] font-bold text-gray-800">{step.content}</p>
                      {step.note && <p className="text-[10px] text-gray-500">{step.note}</p>}
                    </div>
                  </div>
                ))}
                <p className="text-[10px] text-sunset-600 font-bold mt-1">{modelItineraries.planA.cost}</p>
              </div>
            </Accordion>

            {/* Plan B */}
            <Accordion
              id="itinerary-b"
              title={modelItineraries.planB.name}
              subtitle={modelItineraries.planB.note}
              icon="📋"
              forceOpen={forceOpenIds.has('itinerary-b')}
            >
              <div className="mt-1 space-y-1.5">
                {modelItineraries.planB.steps.map((step, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-[10px] text-ocean-600 font-bold flex-shrink-0 w-16 mt-0.5">{step.time}</span>
                    <div>
                      <p className="text-[10px] font-bold text-gray-800">{step.content}</p>
                      {step.note && <p className="text-[10px] text-gray-500">{step.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>

            {/* Plan C */}
            <Accordion
              id="itinerary-c"
              title={modelItineraries.planC.name}
              subtitle={modelItineraries.planC.note}
              icon="📋"
              forceOpen={forceOpenIds.has('itinerary-c')}
            >
              <div className="mt-1 space-y-1.5">
                {modelItineraries.planC.steps.map((step, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-[10px] text-ocean-600 font-bold flex-shrink-0 w-16 mt-0.5">{step.time}</span>
                    <div>
                      <p className="text-[10px] font-bold text-gray-800">{step.content}</p>
                      {step.note && <p className="text-[10px] text-gray-500">{step.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>

            {/* Plan D */}
            <Accordion
              id="itinerary-d"
              title={modelItineraries.planD.name}
              subtitle={modelItineraries.planD.note}
              icon="📋"
              forceOpen={forceOpenIds.has('itinerary-d')}
            >
              <div className="mt-1">
                <p className="text-xs font-bold text-ocean-800 mb-1">Day 5（到着日午後〜）</p>
                <div className="space-y-1.5 mb-3">
                  {modelItineraries.planD.day5.map((step, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-[10px] text-ocean-600 font-bold flex-shrink-0 w-16 mt-0.5">{step.time}</span>
                      <div>
                        <p className="text-[10px] font-bold text-gray-800">{step.content}</p>
                        {step.note && <p className="text-[10px] text-gray-500">{step.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs font-bold text-ocean-800 mb-1">Day 6（ボロブドゥール終日）</p>
                <div className="space-y-1.5">
                  {modelItineraries.planD.day6.map((step, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-[10px] text-ocean-600 font-bold flex-shrink-0 w-16 mt-0.5">{step.time}</span>
                      <div>
                        <p className="text-[10px] font-bold text-gray-800">{step.content}</p>
                        {step.note && <p className="text-[10px] text-gray-500">{step.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Accordion>
          </div>
        </div>

        {/* Emergency contacts */}
        <div className="mt-4 bg-red-50 rounded-xl p-4 border border-red-200">
          <p className="text-xs font-bold text-red-800 mb-2">緊急連絡先</p>
          <div className="space-y-1 text-xs text-gray-700">
            <p><span className="font-bold">警察:</span> 110</p>
            <p><span className="font-bold">救急車:</span> 118 / 119</p>
            <p><span className="font-bold">在ジャカルタ日本国大使館:</span> (021) 3192-4308</p>
            <p><span className="font-bold">RS Bethesda:</span> Jl. Jend. Sudirman No.70</p>
            <p><span className="font-bold">RS Panti Rapih:</span> Jl. Cik Di Tiro No.30</p>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <div className="px-4 pb-8">
        <div className="flex flex-col gap-2">
          <Link
            to="/day/5"
            className="block w-full py-3 bg-ocean-600 text-white text-center text-sm font-bold rounded-xl"
          >
            Day 5 タイムラインを見る
          </Link>
          <Link
            to="/day/6"
            className="block w-full py-3 bg-ocean-600 text-white text-center text-sm font-bold rounded-xl"
          >
            Day 6 タイムラインを見る
          </Link>
          <Link
            to="/pangandaran"
            className="block w-full py-3 bg-sunset-600 text-white text-center text-sm font-bold rounded-xl"
          >
            パンガンダラン ガイド
          </Link>
          <Link
            to="/malang"
            className="block w-full py-3 bg-sunset-600 text-white text-center text-sm font-bold rounded-xl"
          >
            マラン ガイド
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
