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
  ijenBasicInfo,
  ijenEntryFees,
  ijenRequirements,
  ijenEquipment,
  ijenTourOperators,
  ijenHealthClinics,
  ijenHealthProcess,
  ijenHealthDenied,
  ijenTrekTimeline,
  ijenTips,
  lamborghiniCart,
  ferryQuickInfo,
  ferryBooking,
  ferrySteps,
  ferryOnboard,
  ferryArrival,
  touristSpots,
  localDishes,
  streetFoodAreas,
  coffeeInfo,
  accommodations,
  transportToCity,
  localTransport,
  toKetapang,
  safetyAlerts,
} from '../data/banyuwangi-data'

export default function BanyuwangiGuide() {
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
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Blue_fire_of_Ijen%2C_Kawah_Ijen%2C_Java%2C_Indonesia%2C_20220821_0432_9580.jpg/1024px-Blue_fire_of_Ijen%2C_Kawah_Ijen%2C_Java%2C_Indonesia%2C_20220821_0432_9580.jpg"
        alt="イジェン火山のブルーファイア"
        overlay
      >
        <span className="text-xs font-bold bg-sunset-600 px-3 py-1 rounded-full inline-block mb-2">
          完全ガイド
        </span>
        <h1 className="text-2xl font-black">バニュワンギ</h1>
        <p className="text-sm opacity-90 mt-1">イジェン火山・フェリー・グルメ・宿泊</p>
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
          ジャワ島最東端の県（Regency）。バリ海峡を挟んでバリ島と向かい合う「ジャワとバリの門」。
          イジェン火山の世界唯一のブルーファイア、バルラン国立公園の「ジャワのアフリカ」サバンナ、
          そして激辛のナシ・テンポンで知られる。
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
            <li className="text-xs text-gray-700">イジェンツアーは宿で手配可能。深夜0:00-1:00AM出発</li>
            <li className="text-xs text-gray-700">クタパン港まで市内から約10km。Grab/電車で移動</li>
            <li className="text-xs text-gray-700">ATMは市内に多数。イジェン登山口にはATMなし</li>
            <li className="text-xs text-gray-700">イジェンの入場料は非現金決済（QRIS）のみ</li>
          </ul>
        </div>

        {/* Map */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">バニュワンギ エリアマップ</h3>
          <RouteMap spots={mapSpots} pois={mapPois} height="350px" />
        </div>
      </div>

      {/* ===== IJEN ===== */}
      <div id="ijen" ref={(el) => (sectionRefs.current.ijen = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">イジェン火山 / カワ・イジェン</h2>
        <p className="text-xs text-gray-500 mb-4">世界唯一のアクセス可能なブルーファイアと最大の酸性火口湖</p>

        {/* Basic info grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {ijenBasicInfo.map((info) => (
            <div key={info.label} className="bg-sand-50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-gray-500">{info.label}</p>
              <p className="text-xs font-bold">{info.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {/* Entry fees */}
          <Accordion
            id="ijen-fees"
            title="入場料・営業時間"
            subtitle="外国人 Rp 100,000〜"
            icon="🎫"
            forceOpen={forceOpenIds.has('ijen-fees')}
          >
            <table className="w-full text-xs border-collapse mt-1">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">区分</th>
                  <th className="text-left p-1.5 font-bold">平日</th>
                  <th className="text-left p-1.5 font-bold">週末</th>
                </tr>
              </thead>
              <tbody>
                {ijenEntryFees.map((f) => (
                  <tr key={f.category} className="border-t border-sand-200">
                    <td className="p-1.5">{f.category}</td>
                    <td className="p-1.5">{f.weekday}</td>
                    <td className="p-1.5">{f.weekend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-2 text-xs text-gray-600 space-y-1">
              <p>開園: 午前2:00〜正午12:00</p>
              <p>定休日: 毎月第1金曜日（環境保全のため）</p>
              <p className="font-bold text-red-700">現金不可 — QRIS（キャッシュレス）決済のみ</p>
            </div>
          </Accordion>

          {/* Requirements */}
          <Accordion
            id="ijen-requirements"
            title="必須要件（2024年1月〜）"
            subtitle="健康証明書・事前予約・ガイド同伴"
            icon="⚠️"
            variant="warning"
            forceOpen={forceOpenIds.has('ijen-requirements')}
          >
            <div className="space-y-2 mt-1">
              {ijenRequirements.map((r) => (
                <div key={r.item} className="flex gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0 text-xs mt-0.5">!</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{r.item}</p>
                    <p className="text-xs text-gray-600">{r.desc}</p>
                    {r.link && (
                      <button
                        onClick={() => scrollToId(r.link)}
                        className="text-xs text-ocean-600 underline mt-0.5"
                      >
                        詳細を見る →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Equipment */}
          <Accordion
            id="ijen-equipment"
            title="必要装備"
            subtitle="ガスマスク・ヘッドランプ・防寒着..."
            icon="🎒"
            forceOpen={forceOpenIds.has('ijen-equipment')}
          >
            <div className="space-y-1.5 mt-1">
              {ijenEquipment.map((e) => (
                <div key={e.item} className="flex items-start gap-2">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold flex-shrink-0 mt-0.5 ${
                    e.essential ? 'bg-red-100 text-red-700' : 'bg-sand-200 text-gray-600'
                  }`}>
                    {e.essential ? '必須' : '推奨'}
                  </span>
                  <div>
                    <span className="text-xs font-bold">{e.item}</span>
                    <span className="text-xs text-gray-600 ml-1">{e.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Tour operators */}
          <Accordion
            id="ijen-tours"
            title="ツアー手配"
            subtitle="Rp 200,000〜（宿泊先手配が最安）"
            icon="🗺️"
            badge="おすすめ"
            variant="highlight"
            forceOpen={forceOpenIds.has('ijen-tours')}
          >
            <div className="space-y-4 mt-1">
              {ijenTourOperators.map((op) => (
                <div
                  key={op.id}
                  className={`rounded-xl border p-3 ${op.recommended ? 'border-green-300 bg-green-50' : 'border-sand-200 bg-white'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {op.recommended && (
                      <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full font-bold">最安</span>
                    )}
                    <p className="text-xs font-bold text-gray-800">{op.name}</p>
                  </div>
                  <p className="text-xs font-bold text-sunset-600">{op.price}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">含: {op.includes}</p>

                  {op.details && (
                    <div className="mt-2 space-y-1">
                      {op.details.map((d) => (
                        <div key={d.hostel} className="text-xs bg-white rounded-lg p-2 border border-sand-200">
                          <span className="font-bold">{d.hostel}</span>
                          <span className="text-sunset-600 ml-1">{d.price}</span>
                          <span className="text-gray-500 block text-[10px]">{d.note}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-2">
                    <p className="text-[10px] font-bold text-gray-600 mb-1">手順</p>
                    {op.steps.map((s, i) => (
                      <p key={i} className="text-[10px] text-gray-600 ml-2">
                        <span className="text-ocean-600 font-bold mr-1">{i + 1}.</span>{s}
                      </p>
                    ))}
                  </div>

                  {op.whatsapp && (
                    <a
                      href={`https://wa.me/${op.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-[10px] bg-green-600 text-white px-2 py-1 rounded-full"
                    >
                      WhatsAppで予約
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Accordion>

          {/* Health certificate */}
          <Accordion
            id="ijen-health"
            title="健康証明書 完全ガイド"
            subtitle="Rp 25,000〜100,000 / 有効期限7日間"
            icon="🏥"
            forceOpen={forceOpenIds.has('ijen-health')}
          >
            <p className="text-xs text-red-700 font-bold mt-1 mb-2">
              2024年1月5日〜全訪問者に義務化。無ければ入山不可
            </p>

            <p className="text-xs font-bold text-gray-800 mb-1">取得方法（3ルート）</p>
            <div className="space-y-1 mb-3 text-xs text-gray-700">
              <p><span className="font-bold text-green-700">推奨:</span> バニュワンギ市内クリニックで事前取得</p>
              <p><span className="font-bold">代行:</span> ツアー会社がツアー中に立ち寄り手配</p>
              <p><span className="font-bold">当日:</span> パルトゥディン登山口の医療ポスト（混雑リスクあり）</p>
            </div>

            <p className="text-xs font-bold text-gray-800 mb-1">クリニック一覧</p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-[10px] border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-sand-100">
                    <th className="text-left p-1.5 font-bold">名前</th>
                    <th className="text-left p-1.5 font-bold">営業</th>
                    <th className="text-left p-1.5 font-bold">費用</th>
                  </tr>
                </thead>
                <tbody>
                  {ijenHealthClinics.map((c) => (
                    <tr key={c.name} className="border-t border-sand-200">
                      <td className="p-1.5">
                        <span className="font-bold">{c.name}</span>
                        <span className="block text-gray-500">{c.address}</span>
                      </td>
                      <td className="p-1.5">{c.hours}</td>
                      <td className="p-1.5 font-bold">{c.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3">
              <p className="text-xs font-bold text-gray-800 mb-1">健康診断の流れ（約10-15分）</p>
              {ijenHealthProcess.map((step, i) => (
                <p key={i} className="text-xs text-gray-600">
                  <span className="text-ocean-600 font-bold mr-1">{i + 1}.</span>{step}
                </p>
              ))}
            </div>

            <div className="mt-3 bg-red-50 rounded-lg p-2">
              <p className="text-xs font-bold text-red-700 mb-1">入山禁止となる人</p>
              {ijenHealthDenied.map((d, i) => (
                <p key={i} className="text-[10px] text-red-700">
                  <span className="mr-1">&#9679;</span>{d}
                </p>
              ))}
            </div>

            <p className="text-xs text-gray-600 mt-2">有効期限: 発行から<span className="font-bold">7日間</span></p>
          </Accordion>

          {/* Trek timeline */}
          <Accordion
            id="ijen-trek"
            title="分刻みトレッキングガイド"
            subtitle="22:00〜09:00 完全タイムライン"
            icon="🥾"
            forceOpen={forceOpenIds.has('ijen-trek')}
          >
            <div className="space-y-3 mt-1">
              {ijenTrekTimeline.map((t) => (
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
          </Accordion>

          {/* Lamborghini cart */}
          <Accordion
            id="ijen-cart"
            title="「ランボルギーニ」カート"
            subtitle="登り Rp 600,000 / 下り Rp 200,000"
            icon="🛒"
            forceOpen={forceOpenIds.has('ijen-cart')}
          >
            <div className="space-y-1.5 mt-1 text-xs text-gray-700">
              <p><span className="font-bold">正体:</span> {lamborghiniCart.what}</p>
              <p><span className="font-bold">構造:</span> {lamborghiniCart.structure}</p>
              <p><span className="font-bold">料金:</span> {lamborghiniCart.price}</p>
              <p><span className="font-bold">区間:</span> {lamborghiniCart.section}</p>
              <p><span className="font-bold">利用者:</span> {lamborghiniCart.users}</p>
            </div>
          </Accordion>

          {/* Tips */}
          <Accordion
            id="ijen-tips"
            title="経験者の12のTips"
            subtitle="日本人ブロガーの知見も統合"
            icon="💡"
            forceOpen={forceOpenIds.has('ijen-tips')}
          >
            <div className="space-y-2 mt-1">
              {ijenTips.map((tip, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-ocean-600 font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}.</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== FERRY ===== */}
      <div id="ferry" ref={(el) => (sectionRefs.current.ferry = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">クタパン → ギリマヌク フェリー</h2>
        <p className="text-xs text-gray-500 mb-4">ジャワ島 → バリ島。24時間運航</p>

        {/* Quick info */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {ferryQuickInfo.map((info) => (
            <div key={info.label} className="bg-sand-50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-gray-500">{info.label}</p>
              <p className="text-xs font-bold">{info.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {/* Ticket booking */}
          <Accordion
            id="ferry-ticket"
            title="チケット購入方法"
            subtitle="Ferizyアプリが推奨"
            icon="🎫"
            forceOpen={forceOpenIds.has('ferry-ticket')}
          >
            <div className="space-y-3 mt-1">
              {ferryBooking.map((b) => (
                <div
                  key={b.id}
                  className={`rounded-xl border p-3 ${b.recommended ? 'border-green-300 bg-green-50' : 'border-sand-200'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {b.recommended && (
                      <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full font-bold">推奨</span>
                    )}
                    <p className="text-xs font-bold">{b.name}</p>
                  </div>
                  {b.steps.map((s, i) => (
                    <p key={i} className="text-[10px] text-gray-600 ml-2">
                      <span className="text-ocean-600 font-bold mr-1">{i + 1}.</span>{s}
                    </p>
                  ))}
                  {b.note && (
                    <p className="text-[10px] text-gray-500 mt-1 italic">{b.note}</p>
                  )}
                </div>
              ))}
            </div>
          </Accordion>

          {/* Boarding process */}
          <Accordion
            id="ferry-boarding"
            title="乗船プロセス（徒歩旅客）"
            subtitle="5ステップ"
            icon="🚢"
            defaultOpen
            forceOpen={forceOpenIds.has('ferry-boarding')}
          >
            <div className="space-y-2 mt-1">
              {ferrySteps.map((item) => (
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

          {/* Onboard */}
          <Accordion
            id="ferry-onboard"
            title="船内の様子"
            subtitle="エアコン・充電・カフェ"
            icon="⛴️"
            forceOpen={forceOpenIds.has('ferry-onboard')}
          >
            <ul className="mt-1 space-y-1">
              {ferryOnboard.map((item, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{item}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Arrival */}
          <Accordion
            id="ferry-arrival"
            title="ギリマヌク到着後"
            subtitle="バリ島内への移動手段"
            icon="🏝️"
            forceOpen={forceOpenIds.has('ferry-arrival')}
          >
            <ul className="mt-1 space-y-1">
              {ferryArrival.map((item, i) => (
                <li key={i} className="text-xs text-gray-700 leading-relaxed">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{item}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Ferry safety */}
          <SafetyAlerts
            alerts={[{ spot: 'フェリー安全警告（2025年）', warning: '2025年にバリ海峡でフェリー沈没事故が発生（6名死亡、約30名行方不明）。悪天候時は運航遅延/中止あり。一部船舶で乗船定員75%制限実施中。パスポートは防水ケースで携帯すること' }]}
          />
        </div>
      </div>

      {/* ===== TOURIST SPOTS ===== */}
      <div id="spots" ref={(el) => (sectionRefs.current.spots = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">観光スポット</h2>
        <div className="space-y-3">
          {touristSpots.map((spot) => (
            <Accordion
              key={spot.id}
              id={`spot-${spot.id}`}
              title={spot.name}
              subtitle={spot.tagline}
              icon="📍"
              badge={spot.fee}
              forceOpen={forceOpenIds.has(`spot-${spot.id}`)}
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
                    <span className="text-sunset-600 mr-1">&#9679;</span>{h}
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

        {/* Nasi Tempong highlight */}
        <div className="bg-sunset-50 border border-sunset-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🌶️</span>
            <div>
              <p className="text-sm font-black text-gray-800">ナシ・テンポン</p>
              <p className="text-xs text-gray-600">バニュワンギの代名詞。「テンポン（殴る）」級の辛さ</p>
            </div>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nasi_tempong_ikan_goreng_1.jpg/640px-Nasi_tempong_ikan_goreng_1.jpg"
            alt="ナシ・テンポン"
            loading="lazy"
            className="w-full h-40 object-cover rounded-xl mb-2"
          />
          <p className="text-xs text-gray-700 leading-relaxed">
            白飯に各種おかず（揚げ魚、テンペ、豆腐、茹で野菜）を添え、
            生唐辛子・テラシ（海老味噌）で作った激辛サンバルをかけて食べる。
          </p>
          <p className="text-xs font-bold text-sunset-600 mt-1">Rp 10,000〜（約95円〜）</p>
        </div>

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
            title="コーヒー（イジェン高原産）"
            icon="☕"
            forceOpen={forceOpenIds.has('food-coffee')}
          >
            <p className="text-xs text-gray-700 mt-1 mb-2">{coffeeInfo.intro}</p>
            <div className="space-y-1">
              {coffeeInfo.farms.map((farm) => (
                <div key={farm.name} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{farm.name}</span>
                  <span className="text-gray-500 ml-1">({farm.duration})</span>
                  <span className="block text-gray-600 text-[10px]">{farm.note}</span>
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
            id="stay-ijen"
            title="イジェンツアー手配に便利な宿 TOP 5"
            icon="🏨"
            defaultOpen
            badge="おすすめ"
            forceOpen={forceOpenIds.has('stay-ijen')}
          >
            <div className="space-y-2 mt-1">
              {accommodations.ijenFriendly.map((h) => (
                <div key={h.name} className="border border-sand-200 rounded-xl p-3">
                  <p className="text-xs font-bold text-gray-800">{h.name}</p>
                  <p className="text-xs text-sunset-600 font-bold">{h.price}</p>
                  <p className="text-[10px] text-gray-600">{h.features}</p>
                  <p className="text-[10px] text-green-700 font-bold mt-1">ツアー: {h.tour}</p>
                  <p className="text-[10px] text-gray-500">{h.location}</p>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion
            id="stay-highland"
            title="イジェン高原エリア"
            subtitle="リゾート中心 Rp 250,000〜"
            icon="🏔️"
            forceOpen={forceOpenIds.has('stay-highland')}
          >
            <div className="space-y-1.5 mt-1">
              {accommodations.highland.map((h) => (
                <div key={h.name} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{h.name}</span>
                  <span className="text-sunset-600 ml-1">{h.price}</span>
                  <span className="block text-gray-500 text-[10px]">{h.note}</span>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion
            id="stay-south"
            title="南海岸エリア"
            icon="🏖️"
            forceOpen={forceOpenIds.has('stay-south')}
          >
            <div className="space-y-1.5 mt-1">
              {accommodations.southCoast.map((h) => (
                <div key={h.name} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{h.name}</span>
                  <span className="block text-gray-500 text-[10px]">{h.note}</span>
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
          <Accordion
            id="transport-train"
            title="マラン → バニュワンギ（鉄道）"
            subtitle={`${transportToCity.train.fare} / ${transportToCity.train.duration}`}
            icon="🚂"
            defaultOpen
            forceOpen={forceOpenIds.has('transport-train')}
          >
            <div className="mt-1">
              <div className="grid grid-cols-2 gap-2 text-center mb-2">
                <div className="bg-sand-50 rounded-lg p-2">
                  <p className="text-[10px] text-gray-500">列車名</p>
                  <p className="text-xs font-bold">{transportToCity.train.name}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-2">
                  <p className="text-[10px] text-gray-500">運賃</p>
                  <p className="text-xs font-bold">{transportToCity.train.fare}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-2">
                  <p className="text-[10px] text-gray-500">出発</p>
                  <p className="text-xs font-bold">{transportToCity.train.depart}</p>
                </div>
                <div className="bg-sand-50 rounded-lg p-2">
                  <p className="text-[10px] text-gray-500">到着</p>
                  <p className="text-xs font-bold">{transportToCity.train.arrive}</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mb-1">予約: {transportToCity.train.booking}</p>
              {transportToCity.train.notes.map((n, i) => (
                <p key={i} className="text-xs text-gray-600">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{n}
                </p>
              ))}
            </div>
          </Accordion>

          <Accordion
            id="transport-local"
            title="市内交通"
            subtitle="Grab/アンコット/無料DAMRIバス"
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

          <Accordion
            id="transport-ketapang"
            title="市内 → クタパン港"
            subtitle="約10km北"
            icon="🚌"
            forceOpen={forceOpenIds.has('transport-ketapang')}
          >
            <div className="space-y-1.5 mt-1">
              {toKetapang.options.map((o) => (
                <div key={o.method} className={`rounded-lg p-2 ${o.recommended ? 'bg-green-50 border border-green-200' : 'bg-sand-50'}`}>
                  <div className="flex items-center gap-2">
                    {o.recommended && (
                      <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full font-bold">推奨</span>
                    )}
                    <span className="text-xs font-bold">{o.method}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">{o.detail}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== SAFETY ===== */}
      <div id="safety" ref={(el) => (sectionRefs.current.safety = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">安全情報</h2>
        <SafetyAlerts alerts={safetyAlerts} />
        <div className="mt-3 bg-yellow-50 rounded-xl p-3 border border-yellow-200">
          <p className="text-xs font-bold text-yellow-800 mb-1">日本人ブロガーの警告</p>
          <p className="text-xs text-gray-700 italic leading-relaxed">
            「これは人が死ぬこともあるな」— Travel Kurarin
          </p>
          <p className="text-xs text-gray-700 italic leading-relaxed mt-1">
            「風向きが変わると黄色の有毒ガスに猛烈に襲われ、1m先も見えない」— Matatabinomori
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 py-6 space-y-3">
        <div className="flex gap-3">
          <Link
            to="/day/9"
            className="flex-1 text-center bg-sunset-600 rounded-xl py-3 text-sm font-medium text-white"
          >
            Day 9 の行程 →
          </Link>
          <Link
            to="/day/10"
            className="flex-1 text-center bg-ocean-600 rounded-xl py-3 text-sm font-medium text-white"
          >
            Day 10 の行程 →
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
